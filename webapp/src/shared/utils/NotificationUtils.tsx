import { notification } from "antd";

export class NotificationUtils {
  static error(message: string) {
    notification.error({
      message: 'Có lỗi xảy ra',
      description: <>Thông tin lỗi: <b>{message}</b></>,
      style: {
        zIndex: 10
      }
    })
  }
}