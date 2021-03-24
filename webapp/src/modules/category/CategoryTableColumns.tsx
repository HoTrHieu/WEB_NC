import { ICategory } from "../../shared/entities/ICategory";
import { CategoryStatusSwitch } from "./CategoryStatusSwitch";

export const CategoryTableColumns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Parent',
    render(_: any, category: ICategory) {
      return category.parent.name;
    }
  },
  {
    title: 'Created date',
    dataIndex: 'createdDate'
  },
  {
    title: 'Status',
    render(_: any, category: ICategory) {
      return <CategoryStatusSwitch category={category} />
    }
  }
]