import { Rule } from "rc-field-form/lib/interface";

interface IContentEditFormRules {
  [key: string]: Rule[]
}

export const ContentEditFormRules: IContentEditFormRules = {
  title: [
    { required: true, message: 'Title is required' },
    { min: 4, message: 'Title is too short' },
    { max: 255, message: 'Title is too long' }
  ],
  description: [
    { required: true, message: 'Description is required' },
  ],
}