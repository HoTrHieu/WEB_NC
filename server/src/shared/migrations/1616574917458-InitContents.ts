import {MigrationInterface, QueryRunner} from "typeorm";
import { Course } from "../entities/course.entity";
import * as faker from 'faker';
import * as path from 'path';
import * as fs from 'fs';
import { Content } from "../entities/content.entity";
import { getVideoDurationInSeconds } from "get-video-duration";

const ASSETS_PATH = path.resolve(__dirname, '../../..', 'assets');

export class InitContents1616574917458 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const courses = await queryRunner.manager.find(Course, {
            select: ['id']
        });

        const videoPath = path.join(ASSETS_PATH, 'videos');
        const videoFileNames = fs.readdirSync(videoPath);
        const durationMap = {};
        for (const videoFileName of videoFileNames) {
            durationMap[videoFileName] = await getVideoDurationInSeconds(path.join(videoPath, videoFileName));
        }
        const contents = [];
        for (const course of courses) {
            const contentSize = faker.random.number(videoFileNames.length - 1);
            for (let i = 0; i < contentSize; i++) {
                contents.push(queryRunner.manager.create(Content, {
                    course: { id: course.id },
                    courseId: course.id,
                    description: faker.lorem.paragraphs(faker.random.number(5)),
                    title: faker.lorem.sentence(3 + faker.random.number(7)),
                    duration: durationMap[videoFileNames[i]],
                    videoPath: `videos/${videoFileNames[i]}`,
                    order: i + 1,
                    preview: faker.random.boolean()
                }))
            }
        }

        await queryRunner.manager.save(contents);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `contents`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }

}
