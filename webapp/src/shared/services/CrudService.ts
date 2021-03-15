import Axios, { AxiosRequestConfig } from "axios";

export class CrudService {
  static async get(url: string, config?: AxiosRequestConfig) {
    const { data } = await Axios.get(url, config);
    return data;
  }

  static async create(url: string, payload: any, getResult?: Function) {
    const { data } = await Axios.post(url, payload);
    return getResult ? getResult(data) : data.result;
  }

  static async put(url: string, payload: any, method?: any) {
    const { data } = await (method ? (Axios as any)[method](url, payload) : Axios.put(url, payload));
    return data.success;
  }

  static async delete(url: string) {
    return this.put(url, null, 'delete');
  }
}
