import {MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../entities/user.entity";
import { EntityStatus } from "../enums/entity-status";
import { UserRole } from "../enums/user-role";

export class InitCourses1615823484890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const teachers = await queryRunner.manager.find(User, {
            where: {
                status: EntityStatus.ACTIVE,
                role: UserRole.TEACHER
            }
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `courses`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }

}
