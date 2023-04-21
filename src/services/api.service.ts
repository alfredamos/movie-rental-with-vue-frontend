import axios from "axios";

export default class ApiService<T> {
  constructor(public url: string) {}

  create(resource: T) {
    return axios.post(this.url, resource);
  }

  edit(id: number, resource: T) {
    return axios.patch(`${this.url}/${id}`, resource);
  }

  findAll() {
    return axios.get(this.url);
  }

  findOne(id: number) {
    return axios.get(`${this.url}/${id}`);
  }

  remove(id: number) {
    return axios.delete(`${this.url}/${id}`);
  }
}
