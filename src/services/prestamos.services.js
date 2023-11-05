export const getAllPrestamosService = async () => {
  return await axios.get(`/api/prestamos`, {
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
