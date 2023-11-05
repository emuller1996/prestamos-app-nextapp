// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://prestamos-app-nextapp-6057bpum7-emuller1996.vercel.app", // Aquí define tu baseURL
});

export default instance;
