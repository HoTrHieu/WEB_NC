"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCategories1614162216454 = void 0;
const category_entity_1 = require("../entities/category.entity");
class InitCategories1614162216454 {
    async up(queryRunner) {
        const categories = [
            {
                name: 'Development',
                slug: 'development',
                children: [
                    ['Web Development', 'web-development'],
                    ['Data Science', 'data-science'],
                    ['Mobile Development', 'mobile-apps'],
                    ['Programming Languages', 'programming-languages'],
                    ['Game Development', 'game-development'],
                    ['Database Design & Development', 'databases'],
                    ['Software Testing', 'software-testing'],
                    ['Software Engineering', 'software-engineering'],
                    ['Development Tools', 'development-tools'],
                    ['No-Code Development', 'no-code-development'],
                ],
            },
            {
                name: 'Business',
                slug: 'business',
                children: [
                    ['Entrepreneurship', 'entrepreneurship'],
                    ['Communications', 'communications'],
                    ['Management', 'management'],
                    ['Sales', 'sales'],
                    ['Business Strategy', 'strategy'],
                    ['Operations', 'operations'],
                    ['Project Management', 'project-management'],
                    ['Business Law', 'business-law'],
                    ['Business Analytics & Intelligence', 'analytics-and-intelligence'],
                    ['Human Resources', 'human-resources'],
                    ['Industry', 'industry'],
                    ['E-Commerce', 'e-commerce'],
                    ['Media', 'media'],
                    ['Real Estate', 'real-estate'],
                    ['Other Business', 'other-business'],
                ],
            },
            {
                name: 'Finance & Accounting',
                slug: 'finance-and-accounting',
                children: [
                    ['Accounting & Bookkeeping', 'accounting-bookkeeping'],
                    ['Cryptocurrency & Blockchain', 'cryptocurrency-and-blockchain'],
                    ['Finance', 'finance-management'],
                    ['Finance Cert & Exam Prep', 'finance-certification-and-exam-prep'],
                    ['Financial Modeling & Analysis', 'financial-modeling-and-analysis'],
                    ['Investing & Trading', 'investing-and-trading'],
                    ['Money Management Tools', 'money-management-tools'],
                ],
            },
            {
                name: 'IT & Software',
                slug: 'it-and-software',
                children: [
                    ['IT Certification', 'it-certification'],
                    ['Network & Security', 'network-and-security'],
                    ['Hardware', 'hardware'],
                    ['Operating Systems', 'operating-systems'],
                    ['Other IT & Software', 'other-it-and-software'],
                ],
            },
            {
                name: 'Office Productivity',
                slug: 'office-productivity',
                children: [
                    ['Microsoft', 'microsoft'],
                    ['Apple', 'apple'],
                    ['Google', 'google'],
                    ['SAP', 'sap'],
                    ['Oracle', 'oracle'],
                    ['Other Office Productivity', 'other-office-productivity'],
                ],
            },
            {
                name: 'Personal Development',
                slug: 'personal-development',
                children: [
                    ['Personal Transformation', 'personal-transformation'],
                    ['Personal Productivity', 'productivity'],
                    ['Leadership', 'leadership'],
                    ['Career Development', 'career-development'],
                    ['Parenting & Relationships', 'parenting-and-relationships'],
                    ['Happiness', 'happiness'],
                    ['Religion & Spirituality', 'religion-and-spirituality'],
                    ['Personal Brand Building', 'personal-brand-building'],
                    ['Creativity', 'creativity'],
                    ['Influence', 'influence'],
                    ['Self Esteem & Confidence', 'self-esteem-and-confidence'],
                    ['Stress Management', 'stress-management'],
                    ['Memory & Study Skills', 'memory'],
                    ['Motivation', 'motivation'],
                    ['Other Personal Development', 'other-personal-development'],
                ],
            },
            {
                name: 'Design',
                slug: 'design',
                children: [
                    ['Web Design', 'web-design'],
                    ['Graphic Design & Illustration', 'graphic-design-and-illustration'],
                    ['Design Tools', 'design-tools'],
                    ['User Experience Design', 'user-experience'],
                    ['Game Design', 'game-design'],
                    ['3D & Animation', '3d-and-animation'],
                    ['Fashion Design', 'fashion'],
                    ['Architectural Design', 'architectural-design'],
                    ['Interior Design', 'interior-design'],
                    ['Other Design', 'other-design'],
                ],
            }
        ];
        const { manager } = queryRunner;
        await manager.save(categories.map((parent) => {
            return manager.create(category_entity_1.Category, {
                name: parent.name,
                slug: parent.slug,
                children: parent.children.map(([name, slug]) => manager.create(category_entity_1.Category, { name, slug })),
            });
        }));
    }
    async down(queryRunner) {
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryRunner.query('truncate `categories`');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
    }
}
exports.InitCategories1614162216454 = InitCategories1614162216454;
//# sourceMappingURL=1614162216454-InitCategories.js.map