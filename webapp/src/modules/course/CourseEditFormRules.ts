import { Rule } from "rc-field-form/lib/interface";

interface ICourseEditFormRules {
  [key: string]: Rule[]
}

export const CourseEditFormRules: ICourseEditFormRules = {
  categoryId: [
    { required: true, message: 'Category is required' }
  ],
  title: [
    { required: true, message: 'Title is required' },
    { min: 8, message: 'Title is too short' },
    { max: 255, message: 'Title is too long' }
  ],
  subDescription: [
    { required: true, message: 'Sub-description is required' },
    { min: 8, message: 'Sub-description is too short' }
  ],
  price: [
    { required: true, message: 'Price is required' },
    { type: 'number', min: 0, max: 500, message: 'Invalid price' }
  ],
  discount: [
    { required: true, message: 'Discount is required' },
    { type: 'number', min: 0, max: 500, message: 'Invalid discount' },
    ({ getFieldValue }) => ({
      async validator(_, discount: number) {
        const price = getFieldValue('price') || 0;
        if (price < discount) {
          throw new Error("Invalid discount");
        }
      },
      validateTrigger: 'submit'
    })
  ]
}