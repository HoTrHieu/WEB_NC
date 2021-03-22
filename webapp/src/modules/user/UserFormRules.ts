import { Rule } from "rc-field-form/lib/interface";
interface IUserFormRules {
  [key: string]: Rule[]
}

export const UserFormRules: IUserFormRules = {
  email: [
    { required: true, message: 'E-mail is required' },
    { type: 'email', message: 'E-mail is invalid' }
  ],
  username: [
    { required: true, message: 'Username is required' },
    { min: 4, message: 'Username is too short' },
    { max: 255, message: 'Username is too long' }
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password is too short' },
    { max: 255, message: 'Password is too long' }
  ],
  confirmPassword: [
    { required: true, message: 'Confirm password is required' },
    ({ getFieldValue }) => ({
      async validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return true;
        }
        throw new Error('Confirm password is not match');
      },
    })
  ],
  firstName: [
    { required: true, message: 'First name is required' },
    { min: 2, message: 'First name is too short' },
    { max: 255, message: 'First name is too long' }
  ],
  lastName: [
    { required: true, message: 'Last name is required' },
    { min: 2, message: 'Last name is too short' },
    { max: 255, message: 'Last name is too long' }
  ],
  bio: [
    { min: 2, message: 'Bio is too short' },
    { max: 255, message: 'Bio is too long' }
  ],
  introduction: [
    { min: 2, message: 'Introduction is too short' }
  ]
}