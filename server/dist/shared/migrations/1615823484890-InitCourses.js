"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCourses1615823484890 = void 0;
const user_entity_1 = require("../entities/user.entity");
const course_entity_1 = require("../entities/course.entity");
const entity_status_1 = require("../enums/entity-status");
const user_role_1 = require("../enums/user-role");
const path = require("path");
const fs = require("fs");
const fsAsync = require("fs/promises");
const faker = require("faker");
const category_entity_1 = require("../entities/category.entity");
class InitCourses1615823484890 {
    async up(queryRunner) {
        const teachers = await queryRunner.manager.find(user_entity_1.User, {
            where: {
                status: entity_status_1.EntityStatus.ACTIVE,
                role: user_role_1.UserRole.TEACHER
            }
        });
        const categories = await queryRunner.manager.find(category_entity_1.Category);
        const entities = [];
        const titleExists = {};
        const slugExists = {};
        const crawlerRootPath = path.resolve(__dirname, '../../..', 'crawl-data');
        for (const filename of fs.readdirSync(path.join(crawlerRootPath, 'courses'))) {
            const [groupedCate] = filename.split('.');
            const [parentCate, childCate] = groupedCate.split("_");
            const coursesJson = await fsAsync.readFile(path.join(crawlerRootPath, 'courses', filename), 'utf8');
            const courses = JSON.parse(coursesJson);
            courses.forEach((course) => {
                if (!!course.title && !!course.slug) {
                    entities.push(queryRunner.manager.create(course_entity_1.Course, {
                        title: course.title + (titleExists[course.title] ? `(${titleExists[course.title]})` : ''),
                        slug: course.slug + (slugExists[course.slug] ? `-${slugExists[course.slug]}` : ''),
                        subDescription: faker.lorem.paragraph(3),
                        description: faker.lorem.paragraphs(5),
                        avatarPath: `images/${groupedCate}/${course.slug}.jpg`,
                        coverPath: `images/default-cover.jpg`,
                        creatorId: teachers[faker.random.number(teachers.length - 1)].id,
                        categoryId: categories.find(c => c.slug === childCate).id,
                        price: faker.random.float({ min: 5, max: 20 }),
                        discount: faker.random.number({ min: 0, max: 4 }),
                        totalView: faker.random.number({ min: 500, max: 10000 }),
                        avgStar: faker.random.float({ max: 5, min: 2 }),
                        totalReview: faker.random.number({ min: 5, max: 500 }),
                        totalEnrollment: faker.random.number({ min: 100, max: 500 })
                    }));
                    titleExists[course.title] = (titleExists[course.title] || 0) + 1;
                    slugExists[course.slug] = (slugExists[course.slug] || 0) + 1;
                }
            });
        }
        await queryRunner.manager.save(entities);
    }
    async down(queryRunner) {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `courses`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }
}
exports.InitCourses1615823484890 = InitCourses1615823484890;
//# sourceMappingURL=1615823484890-InitCourses.js.map