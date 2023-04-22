import axios from "axios";

export default class ApiGeneral{
 static fetch(url: string){
      return axios.get(url);
 }
}



const apiGeneral = new ApiGeneral()