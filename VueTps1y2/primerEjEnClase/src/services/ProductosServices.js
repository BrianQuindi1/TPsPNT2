import axios from "axios";

const URL = "https://fakestoreapi.com/products"

export const getAll = () => axios.get(URL);
export const getById = (id) => axios.get(`${URL}/${id}`);
export const create = (data) => axios.post(`${URL}`, data);
export const updateById = (id) => axios.put(`${URL}/${id}`, data);
export const deleteById = (id) => axios.delete(`${URL}/${id}`);
