import { Link } from "react-router-dom";
import { ICategory } from "../../shared/entities/ICategory";
import { MomentUtils } from "../../shared/utils/MomentUtils";
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
      return category.parent?.name;
    }
  },
  {
    title: 'Created date',
    dataIndex: 'createdDate',
    render: MomentUtils.formatDateTime
  },
  {
    title: 'Status',
    render(_: any, category: ICategory) {
      return <CategoryStatusSwitch disabled={!category.isEmpty} category={category} />
    }
  },
  {
    title: 'Action',
    render(_: any, category: ICategory) {
      return (
        <Link to={`/admin/category/update/${category.id}`}>Edit</Link>
      )
    }
  }
]