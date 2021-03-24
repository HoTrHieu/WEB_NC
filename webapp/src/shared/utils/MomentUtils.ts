import moment from "moment";

export class MomentUtils {
  static formatDateTime(date: any) {
    return moment(date).format('DD/MM/YYYY HH:mm');
  }
}