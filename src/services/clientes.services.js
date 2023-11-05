import axios from "@/libs/axios";
export const getAllClientesService = async () => {
  return await axios.get(`/api/clientes`, {
    /* headers: {
      Authorization: `Bearer ${token}`,
    }, */
  });
};
export const postCreateClientesService = async (data) => {
  return await axios.post(`/api/clientes`, data, {
    /* headers: {
      Authorization: `Bearer ${token}`,
    }, */
  });
};
export const putUpdateClientesService = async (id,data) => {
  return await axios.put(`/api/clientes/${id}`, data, {
    /* headers: {
      Authorization: `Bearer ${token}`,
    }, */
  });
};
