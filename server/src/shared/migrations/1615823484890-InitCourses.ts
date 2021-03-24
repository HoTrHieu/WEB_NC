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
        const crawlerRootPath = path.resolve(__dirname, '../../..', 'crawl-data');
        for (const filename of fs.readdirSync(path.join(crawlerRootPath, 'courses'))) {
            const [groupedCate] = filename.split('.')
            const [parentCate, childCate] = groupedCate.split("_");
            const coursesJson = await fsAsync.readFile(path.join(crawlerRootPath, 'courses', filename), 'utf8');
            const courses = JSON.parse(coursesJson);
            courses.forEach((course: any) => {
                if (!!course.title && !!course.slug) {
                    entities.push(queryRunner.manager.create(Course, {
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `courses`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }

}
