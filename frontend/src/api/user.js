import axios from "axios";
import { getHeaders } from "./headers"

export const getUser = async () => {
  try {
    const response = await axios.get('/api/v1/user', { headers: getHeaders() });
    return response?.data;
  } catch (error) {
    console.error({ error });
    return [];
  }
}
