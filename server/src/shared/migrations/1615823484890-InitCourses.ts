import {MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../entities/user.entity";
import { Course } from "../entities/course.entity";
import { EntityStatus } from "../enums/entity-status";
import { UserRole } from "../enums/user-role";

import * as path from 'path';
import * as fs from 'fs';
import * as fsAsync from 'fs/promises';
import * as faker from 'faker';
import { Category } from "../entities/category.entity";

export class InitCourses1615823484890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const teachers = await queryRunner.manager.find(User, {
            where: {
                status: EntityStatus.ACTIVE,
                role: UserRole.TEACHER
            }
        });

        const categories = await queryRunner.manager.find(Category);
        const entities = [];
        const titleExists = {};
        const slugExists = {};
        const crawlerRootPath = path.resolve(__dirname, '../../../..', 'crawler');
        for (const filename of fs.readdirSync(path.join(crawlerRootPath, 'courses'))) {
            const [parentCate, childCate] = filename.split('.')[0].split("_");
            const coursesJson = await fsAsync.readFile(path.join(crawlerRootPath, 'courses', filename), 'utf8');
            const courses = JSON.parse(coursesJson);
            courses.forEach((course: any) => {
                if (!!course.title && !!course.slug) {
                    entities.push(queryRunner.manager.create(Course, {
                        title: course.title + (titleExists[course.title] ? `(${titleExists[course.title]})` : ''),
                        slug: course.slug + (slugExists[course.slug] ? `-${slugExists[course.slug]}` : ''),
                        subDescription: faker.lorem.paragraph(3),
                        description: faker.lorem.paragraphs(5),
                        avatarPath: `${filename}/${course.slug}.jpg`,
                        coverPath: `default-cover.jpg`,
                        creatorId: teachers[faker.random.number(teachers.length - 1)].id,
                        categoryId: categories.find(c => c.slug === childCate).id
                    }));

                    titleExists[course.title] = (titleExists[course.title] || 0) + 1;
                    slugExists[course.slug] = (slugExists[course.slug] || 0) + 1;
                }
            });
        }
        await queryRunner.manager.save(entities);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `courses`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }

}
