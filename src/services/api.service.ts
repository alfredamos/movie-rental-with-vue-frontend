import Axios from "@/interceptors/axios.interceptor";

export default class ApiService<T> {
  constructor(public url: string) {}

  create(resource: T) {
    return Axios.post(this.url, resource);
  }

  edit(id: string, resource: T) {
    return Axios.patch(`${this.url}/${id}`, resource);
  }

  findAll() {
    return Axios.get(this.url);
  }

  findOne(id: string) {
    return Axios.get(`${this.url}/${id}`);
  }

  get(){
    return Axios.get(this.url);
  }

  remove(id: string) {
    console.log("In delete, id : ", id);
    
    return Axios.delete(`${this.url}/${id}`);
  }
}


