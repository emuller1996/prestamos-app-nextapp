import axios from "@/libs/axios";
export const getAllPagosService = async () => {
  return await axios.get(`/api/pagos`, {
    /* headers: {
      Authorization: `Bearer ${token}`,
    }, */
  });
};
