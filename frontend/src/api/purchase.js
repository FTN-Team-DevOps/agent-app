import axios from "axios";
import { getHeaders } from "./headers"

export const getPurchases = async () => {
  try {
    const response = await axios.get('/api/v1/purchase', { headers: getHeaders() });
    return response?.data ?? [];
  } catch (error) {
    console.error({ error });
    return [];
  }
}

export const createPurchase = async (purchase) => {
  try {
    const response = await axios.post('/api/v1/purchase', { purchase }, { headers: getHeaders() });
    return response?.data;
  } catch (error) {
    console.error({ error });
    return [];
  }
}
