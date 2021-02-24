import {MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../entities/user.entity";
import { UserRole } from "../enums/user-role";
import { BcryptUtil } from "../utils/bcrypt.util";

export class InitUsers1614161572512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const passwordHash = await BcryptUtil.hash('123456789');
        const { manager } = queryRunner;
        await manager.save([
          manager.create(User, {
            username: 'admin',
            email: 'admin@localhost',
            firstName: 'Super',
            lastName: 'Admin',
            role: UserRole.ADMIN,
            passwordHash,
          }),
          manager.create(User, {
            username: 'teacher1',
            email: 'teacher1@localhost',
            firstName: 'I am',
            lastName: 'Teacher 1',
            role: UserRole.TEACHER,
            passwordHash,
          }),
          manager.create(User, {
            username: 'student1',
            email: 'student1@localhost',
            firstName: 'I am',
            lastName: 'Student 1',
            role: UserRole.NORMAL,
            passwordHash,
          }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('truncate `users`');
    }

}
