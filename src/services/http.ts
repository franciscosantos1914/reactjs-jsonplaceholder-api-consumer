import axios from "axios-observable";
import env from "../environments/development";

class HttpService {
  baseURL = env.apiUrl;

  get(url: string) {
    return axios.get(this.baseURL + url);
  }

  post(url: string, data: Object) {
    return axios.post(this.baseURL + url, data);
  }

  put(url: string, data: Object) {
    return axios.put(this.baseURL + url, data);
  }

  delete(url: string, id: any) {
    return axios.delete(this.baseURL + url, id);
  }
}

export default new HttpService();
