export class ArrayUtil {
  static flatMap(arr: any) {
    return arr.reduce((x, y) => x.concat(y), []);
  }

  static isEmpty(arr) {
    return !Array.isArray(arr) || arr.length === 0;
  }
}
