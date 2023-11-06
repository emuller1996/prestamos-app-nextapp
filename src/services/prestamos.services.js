import axios from "@/libs/axios";

export const getAllPrestamosService = async () => {
  return await axios.get(`/api/prestamos`, {
    /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
  });
};
export const getAllPrestamosByIdService = async (id) => {
  return await axios.get(`/api/prestamos/${id}/`, {
    /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
  });
};

export const postCreatePrestamosService = async (data) => {
  return await axios.post(`/api/prestamos`, data, {
    /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
  });
};
export const postCreatePagoPorPrestamosService = async (data) => {
  return await axios.post(`/api/prestamos/${data.prestamoId}/pagos`, data, {
    /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
  });
};
