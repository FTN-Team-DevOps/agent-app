import axios from "axios";
import { getHeaders } from "./headers"

export const getAllProducts = async () => {
  try {
    const response = await axios.get('/api/v1/product', { headers: getHeaders() });
    return response?.data.filter((p) => p.count > 0) || [];
  } catch (error) {
    console.error({ error });
    return [];
  }
}

export const getMyProducts = async () => {
  try {
    const response = await axios.get('/api/v1/product/my', { headers: getHeaders() });
    return response?.data || [];
  } catch (error) {
    console.error({ error });
    return [];
  }
}

export const getProduct = async (id) => {
  axios.get(`/api/v1/product?${id}`, { headers: getHeaders() })
  .then(function (response) {
    console.log(response.data);
    return response.data || null;
  })
  .catch(function (error) {
    console.error({ error });
    return null;
  })
}

export const createProduct = async (product, callback) => {
  axios.post(`/api/v1/product`, { product }, { headers: getHeaders() })
  .then(function (response) {
    console.log(response.data);
    callback();
    return response.data || null;
  })
  .catch(function (error) {
    console.error({ error });
    return null;
  })
}

export const updateProduct = async (productUpdate, callback) => {
  axios.post(`/api/v1/product/update`, { productUpdate }, { headers: getHeaders() })
  .then(function (response) {
    console.log(response.data);
    callback();
    return response.data || null;
  })
  .catch(function (error) {
    console.error({ error });
    return null;
  })
}

export const deleteProduct = async (id, callback) => {
  axios.delete(`/api/v1/product/${id}`, { headers: getHeaders() })
  .then(function (response) {
    console.log(response.data);
    callback();
    return response.data || null;
  })
  .catch(function (error) {
    console.error({ error });
  })
}
