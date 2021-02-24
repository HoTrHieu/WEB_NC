export class ClassUtils {
  static copyFields(source: any, dest: any, useSourceFields = true) {
    Object.keys(useSourceFields ? source : dest).forEach(
      (k) => (dest[k] = source[k]),
    );
    return dest;
  }
}
