export class ClassUtils {
  static copyFields(source: any, dest: any, useSourceFields = true) {
    const keys = useSourceFields ? source : dest; 
    for (const k in keys) {
      dest[k] = source[k];  
    }
    return dest;
  }
}
