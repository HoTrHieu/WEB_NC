export class CheckResponse {
  exists: boolean;

  static of(exists: boolean) {
    const res = new CheckResponse();
    res.exists = exists;
    return res;
  }
}