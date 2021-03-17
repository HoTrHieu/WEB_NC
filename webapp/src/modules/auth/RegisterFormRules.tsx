import { Rule } from "rc-field-form/lib/interface";
import { UserFormRules } from "../user/UserFormRules";
import { UserService } from "../user/UserService";

interface IRegisterFormRules {
  [key: string]: Rule[]
}

export const RegisterFormRules: IRegisterFormRules = {
  ...UserFormRules,
  email: [
    ...UserFormRules.email,
    {
      async validator(_, email) {
        const exists = await UserService.checkEmail(email);
        if (exists) {
          throw new Error('E-mail is existed, please use another');
        }
      },
      validateTrigger: 'submit'
    }
  ],
  username: [
    ...UserFormRules.username,
    {
      async validator(_, username) {
        const exists = await UserService.checkUsername(username);
        if (exists) {
          throw new Error('Username is existed, please use another')
        }
      },
      validateTrigger: 'submit'
    }
  ],
  otp: [
    { required: true, message: 'OTP is required' }
  ]
}