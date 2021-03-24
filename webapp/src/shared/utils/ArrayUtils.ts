export class ArrayUtils {
  static flatMap(arr: any[]) {
    return arr.reduce((x: any[], y: any[]) => x.concat(y), []);
  }

  static isEmpty(arr: any[]) {
    return !Array.isArray(arr) || arr.length === 0;
  }
}
