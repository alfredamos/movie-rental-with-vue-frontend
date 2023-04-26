import Axios from "@/interceptors/axios.interceptor";


export default class ApiGeneral {
  static get(url: string) {
    return Axios.get(url);
  }

  static remove(url: string) {
    return Axios.delete(url);
  }
}



