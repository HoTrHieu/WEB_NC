const { Cluster } = require('puppeteer-cluster');
const { categories } = require('./categories');
const pptr = require('puppeteer');
const slugify = require('slugify');
const download = require('download');
const path = require('path');
const fs = require('fs/promises');
const fsSync = require('fs');

(async () => {
  const cluster = await Cluster.launch({
    puppeteerOptions: {
      headless: true
    },
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 8,
    retryLimit: 3
  });

  let done = 0;
  let total = 0;
  await cluster.task(async ({ page, data }) => {
    const id = `${data.parent}_${data.slug}`;
    const idlog = `[${id}]`;

    if (fsSync.existsSync(`courses/${id}.json`)) {
      console.log(idlog, 'skip...');
      total--;
      return;
    }

    await page.goto(data.url);
    console.log(idlog, 'start process');
    await page.waitForSelector('#course-unit-container-Mostpopular + button + button', {
      timeout: 180000
    });
    for (let i = 0; i < 5; i++) {
      await page.click('#course-unit-container-Mostpopular + button + button');
      await page.waitForTimeout(3000);
    }
    const courses = [];
    await page.waitForSelector('#course-unit-container-Mostpopular>div');
    const courseDivs = await page.$$('#course-unit-container-Mostpopular>div');
    for (const courseDiv of courseDivs) {
      await courseDiv.hover();
      const course = await courseDiv.evaluate((node) => {
        const img = node.querySelector('img');
        return {
          imageSrc: img ? img.src : '',
          title: node.innerText.split('\n')[0]
        };
      })

      course.slug = slugify(course.title, { lower: true, strict: true });
      if (course.imageSrc.startsWith('http')) {
        const ext = path.extname(course.imageSrc).split('?')[0];
        course.avatarPath = `${course.slug}${ext}`;
        if (!fsSync.existsSync(`images/${id}`)) {
          await fs.mkdir(`images/${id}`);
        }
        await fs.writeFile(`images/${id}/${course.avatarPath}`, await download(course.imageSrc));
      } 
      delete course.imageSrc;
      courses.push(course);
    }
    await fs.writeFile(`courses/${id}.json`, JSON.stringify(courses), 'utf8');
    console.log(idlog, 'done process courses', `(${++done}/${total})`);
  });

  categories.forEach(parent => {
    parent.children.forEach(([name, url]) => {
      total++;
      cluster.queue({
        parent: parent.url,
        slug: url,
        url: `https://udemy.com/courses/${parent.url}/${url}`,
      });
    });
  });

  cluster.on('taskerror', (...params) => {
    console.log(params);
  })

  await cluster.idle();
  await cluster.close();
})();