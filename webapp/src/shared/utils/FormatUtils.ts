import moment from "moment";

export class FormatUtils {
  static formatCurrency(val: any) {
    return ("" + val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  static parseCurrency(val: any) {
    return ("" + val).replace(/\$\s?|(,*)/g, "");
  }
  static formatSeconds(seconds: number) {
    let pattern = "mm:ss";
    if (seconds >= 3600) {
      pattern = "HH:" + pattern;
    }
    return moment("2015-01-01")
      .startOf("day")
      .seconds(seconds)
      .format(pattern);
  }
}
