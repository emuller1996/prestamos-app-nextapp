// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "", // Aquí define tu baseURL
});

export default instance;
