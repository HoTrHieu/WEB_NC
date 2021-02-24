import { MigrationInterface, QueryRunner } from 'typeorm';
import { Category } from '../entities/category.entity';

export class InitCategories1614162216454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories = [
      {
        name: 'Development',
        children: [
          'Web Development',
          'Data Science',
          'Mobile Development',
          'Programming Languages',
          'Game Development',
          'Database Design & Development',
          'Software Testing',
          'Software Engineering',
          'Development Tools',
          'No-Code Development',
        ],
      },
      {
        name: 'Business',
        children: [
          'Entrepreneurship',
          'Communications',
          'Management',
          'Sales',
          'Business Strategy',
          'Operations',
          'Project Management',
          'Business Law',
          'Business Analytics & Intelligence',
          'Human Resources',
          'Industry',
          'E-Commerce',
          'Media',
          'Real Estate',
          'Other Business',
        ],
      },
      {
        name: 'Finance & Accounting',
        children: [
          'Accounting & Bookkeeping',
          'Compliance',
          'Cryptocurrency & Blockchain',
          'Economics',
          'Finance',
          'Finance Cert & Exam Prep',
          'Financial Modeling & Analysis',
          'Investing & Trading',
          'Money Management Tools',
          'Taxes',
          'Other Finance & Accounting',
        ],
      },
      {
        name: 'IT & Software',
        children: [
          'IT Certification',
          'Network & Security',
          'Hardware',
          'Operating Systems',
          'Other IT & Software',
        ],
      },
      {
        name: 'Office Productivity',
        children: [
          'Microsoft',
          'Apple',
          'Google',
          'SAP',
          'Oracle',
          'Other Office Productivity',
        ],
      },
      {
        name: 'Personal Development',
        children: [
          'Personal Transformation',
          'Personal Productivity',
          'Leadership',
          'Career Development',
          'Parenting & Relationships',
          'Happiness',
          'Esoteric Practices',
          'Religion & Spirituality',
          'Personal Brand Building',
          'Creativity',
          'Influence',
          'Self Esteem & Confidence',
          'Stress Management',
          'Memory & Study Skills',
          'Motivation',
          'Other Personal Development',
        ],
      },
      {
        name: 'Design',
        children: [
          'Web Design',
          'Graphic Design & Illustration',
          'Design Tools',
          'User Experience Design',
          'Game Design',
          'Design Thinking',
          '3D & Animation',
          'Fashion Design',
          'Architectural Design',
          'Interior Design',
          'Other Design',
        ],
      },
      {
        name: 'Marketing',
        children: [
          'Digital Marketing',
          'Search Engine Optimization',
          'Social Media Marketing',
          'Branding',
          'Marketing Fundamentals',
          'Marketing Analytics & Automation',
          'Public Relations',
          'Advertising',
          'Video & Mobile Marketing',
          'Content Marketing',
          'Growth Hacking',
          'Affiliate Marketing',
          'Product Marketing',
          'Other Marketing',
        ],
      },
      {
        name: 'Lifestyle',
        children: [
          'Arts & Crafts',
          'Beauty & Makeup',
          'Esoteric Practices',
          'Food & Beverage',
          'Gaming',
          'Home Improvement',
          'Pet Care & Training',
          'Travel',
          'Other Lifestyle',
        ],
      },
      {
        name: 'Photography & Video',
        children: [
          'Digital Photography',
          'Photography',
          'Portrait Photography',
          'Photography Tools',
          'Commercial Photography',
          'Video Design',
          'Other Photography & Video',
        ],
      },
      {
        name: 'Health & Fitness',
        children: [
          'Fitness',
          'General Health',
          'Sports',
          'Nutrition',
          'Yoga',
          'Mental Health',
          'Dieting',
          'Self Defense',
          'Safety & First Aid',
          'Dance',
          'Meditation',
          'Other Health & Fitness',
        ],
      },
      {
        name: 'Music',
        children: [
          'Instruments',
          'Music Production',
          'Music Fundamentals',
          'Vocal',
          'Music Techniques',
          'Music Software',
          'Other Music',
        ],
      },
      {
        name: 'Teaching & Academics',
        children: [
          'Engineering',
          'Humanities',
          'Math',
          'Science',
          'Online Education',
          'Social Science',
          'Language',
          'Teacher Training',
          'Test Prep',
          'Other Teaching & Academics',
        ],
      },
    ];
    const { manager } = queryRunner;
    await manager.save(
      categories.map((parent) => {
        return manager.create(Category, {
          name: parent.name,
          children: parent.children.map((child) =>
            manager.create(Category, { name: child }),
          ),
        });
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0');
    await queryRunner.query('truncate `categories`');
    await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1');
  }
}
