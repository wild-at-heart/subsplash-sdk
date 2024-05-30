import axios, { AxiosStatic } from "axios";
axios.defaults.baseURL = "https://core.subsplash.com";

export class API {
    api: AxiosStatic;
    constructor() {
        this.api = axios;
    }
}
