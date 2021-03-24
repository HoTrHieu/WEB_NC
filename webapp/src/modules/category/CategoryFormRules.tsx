import { CategoryService } from "./CategoryService"

export const CategoryFormRules: any = {
  name: [
    { required: true, message: "Name is required" },
    { min: 2, message: "Name is too short" },
    { max: 255, message: "Name is too long" },
    {
      async validator(_: any, name: string) {
        const exists = await CategoryService.checkName(name);
        if (exists) {
          throw new Error("Name is existed, please use another one");
        }
      },
      validateTrigger: 'submit'
    }
  ]
}