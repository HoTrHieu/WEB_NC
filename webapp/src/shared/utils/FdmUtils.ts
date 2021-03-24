export class FdmUtils {
  static isID(id: any) {
    return id && !isNaN(id) && id > 0;
  }
}