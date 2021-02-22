export class ClassUtils {
  static copyFields(source: any, dest: any) {
    Object.keys(source).forEach(k => dest[k] = source[k]);
    return dest;
  }
}