import {MigrationInterface, QueryRunner} from "typeorm";
import { User } from "../entities/user.entity";
import { UserRole } from "../enums/user-role";
import { BcryptUtil } from "../utils/bcrypt.util";
import * as faker from 'faker';

export class InitUsers1614161572512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const passwordHash = await BcryptUtil.hash('123456789');
        const { manager } = queryRunner;
        const users = [
          manager.create(User, {
            username: 'admin',
            email: 'admin@gmail.com',
            firstName: 'Super',
            lastName: 'Admin',
            role: UserRole.ADMIN,
            passwordHash,
          }),
          manager.create(User, {
            username: 'teacher1',
            email: 'teacher1@gmail.com',
            firstName: 'I am',
            lastName: 'Teacher 1',
            role: UserRole.TEACHER,
            passwordHash,
          }),
          manager.create(User, {
            username: 'student1',
            email: 'student1@gmail.com',
            firstName: 'I am',
            lastName: 'Student 1',
            role: UserRole.NORMAL,
            passwordHash,
          }),
        ];
        for (let i = 0; i < 50; i++) {
          const firstName = faker.name.firstName(); 
          const username = firstName + (i + 1);
          users.push(manager.create(User, {
            username,
            firstName,
            lastName: faker.name.lastName(),
            email: `${username}@gmail.com`,
            role: UserRole.TEACHER,
            passwordHash
          }));
        }
        await manager.save(users);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
      await queryRunner.query('truncate `users`');
      await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }

}
