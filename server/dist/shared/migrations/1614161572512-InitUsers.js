"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUsers1614161572512 = void 0;
const user_entity_1 = require("../entities/user.entity");
const user_role_1 = require("../enums/user-role");
const bcrypt_util_1 = require("../utils/bcrypt.util");
const faker = require("faker");
const techCompanyNames = [
    'Google',
    'Facebook',
    'Amazon',
    'Apple',
    'Netflix',
    'Airbnb',
    'Uber',
    'Shopee',
    'Lyft',
    'Square',
    'Line',
];
const jobTitles = [
    'Software Engineer',
    'Expert',
    'Expert Engineer',
    'Principal Engineer',
    'Chief Technology Officer',
    'Software Architect',
    'Exper Manager',
];
class InitUsers1614161572512 {
    async up(queryRunner) {
        const passwordHash = await bcrypt_util_1.BcryptUtil.hash('123456789');
        const { manager } = queryRunner;
        const users = [
            manager.create(user_entity_1.User, {
                username: 'admin',
                email: 'admin@gmail.com',
                firstName: 'Super',
                lastName: 'Admin',
                role: user_role_1.UserRole.ADMIN,
                passwordHash,
            }),
            manager.create(user_entity_1.User, {
                username: 'teacher1',
                email: 'teacher1@gmail.com',
                firstName: 'I am',
                lastName: 'Teacher 1',
                role: user_role_1.UserRole.TEACHER,
                bio: `${jobTitles[faker.random.number(jobTitles.length - 1)]} at ${techCompanyNames[faker.random.number(techCompanyNames.length - 1)]}`,
                introduction: faker.lorem.paragraphs(5),
                passwordHash,
            }),
            manager.create(user_entity_1.User, {
                username: 'student1',
                email: 'student1@gmail.com',
                firstName: 'I am',
                lastName: 'Student 1',
                role: user_role_1.UserRole.NORMAL,
                passwordHash,
            }),
        ];
        for (let i = 0; i < 50; i++) {
            const firstName = faker.name.firstName();
            const username = firstName + (i + 1);
            users.push(manager.create(user_entity_1.User, {
                username,
                firstName,
                lastName: faker.name.lastName(),
                email: `${username}@gmail.com`,
                role: user_role_1.UserRole.TEACHER,
                bio: `${jobTitles[faker.random.number(jobTitles.length - 1)]} at ${techCompanyNames[faker.random.number(techCompanyNames.length - 1)]}`,
                introduction: faker.lorem.paragraphs(5),
            }));
        }
        await manager.save(users);
    }
    async down(queryRunner) {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `users`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }
}
exports.InitUsers1614161572512 = InitUsers1614161572512;
//# sourceMappingURL=1614161572512-InitUsers.js.map