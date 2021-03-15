export class FormatUtils {
  static formatCurrency(val: any) {
    return (''+val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  static parseCurrency(val: any) {
    return (''+val).replace(/\$\s?|(,*)/g, '');
  }
}