"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitContents1616574917458 = void 0;
const course_entity_1 = require("../entities/course.entity");
const faker = require("faker");
const path = require("path");
const fs = require("fs");
const content_entity_1 = require("../entities/content.entity");
const get_video_duration_1 = require("get-video-duration");
const ASSETS_PATH = path.resolve(__dirname, '../../..', 'assets');
class InitContents1616574917458 {
    async up(queryRunner) {
        const courses = await queryRunner.manager.find(course_entity_1.Course, {
            select: ['id']
        });
        const videoPath = path.join(ASSETS_PATH, 'videos');
        const videoFileNames = fs.readdirSync(videoPath);
        const durationMap = {};
        for (const videoFileName of videoFileNames) {
            durationMap[videoFileName] = await get_video_duration_1.getVideoDurationInSeconds(path.join(videoPath, videoFileName));
        }
        const contents = [];
        for (const course of courses) {
            const contentSize = faker.random.number(videoFileNames.length - 1);
            for (let i = 0; i < contentSize; i++) {
                contents.push(queryRunner.manager.create(content_entity_1.Content, {
                    course: { id: course.id },
                    courseId: course.id,
                    description: faker.lorem.paragraphs(faker.random.number(5)),
                    title: faker.lorem.sentence(3 + faker.random.number(7)),
                    duration: durationMap[videoFileNames[i]],
                    videoPath: `videos/${videoFileNames[i]}`,
                    order: i + 1,
                    preview: faker.random.boolean()
                }));
            }
        }
        await queryRunner.manager.save(contents);
    }
    async down(queryRunner) {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `contents`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }
}
exports.InitContents1616574917458 = InitContents1616574917458;
//# sourceMappingURL=1616574917458-InitContents.js.map