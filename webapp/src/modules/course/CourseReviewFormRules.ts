import { Rule } from "rc-field-form/lib/interface";

interface ICourseReviewFormRules {
  [key: string]: Rule[]
}

export const CourseReviewFormRules: ICourseReviewFormRules = {
  feedback: [
    { required: true, message: 'Feedback is required' },
    { max: 1000, message: 'Feedback is too long' }
  ],
  star: [
    { required: true, message: 'Star is required' },
    { type: 'number', min: 0, max: 5, message: 'Star is invalid' }
  ]
}