export enum CourseOrderBy {
  PRICE = 'price',
  REVIEW = 'avgStar',
}

export const CourseOrderByDisplay = {
  [CourseOrderBy.PRICE]: 'Price',
  [CourseOrderBy.REVIEW]: 'Review'
}