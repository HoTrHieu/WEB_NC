export class EnumUtils { 
  static values(e: any) {
    try {
      return Object.keys(e).filter(k => isNaN(Number(k))).map(k => e[k]);
    } catch {
      return null;
    }
  }
}