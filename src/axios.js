import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-backend-deploy.herokuapp.com/"
  });

export default instance;