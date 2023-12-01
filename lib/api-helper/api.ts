import axios from "axios";
import * as url from "./url-helper";

// Create an instance of Axios
const axiosInstance = axios.create();

export const getProductsbyid = (productId: any) => {
  return axiosInstance
    .get(`${url.GET_PRODUCTS}/${productId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getProducts = () => {
  return axiosInstance
    .get(url.GET_PRODUCTS)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const addProduct = async (data: any) => {
  try {
    const response = await axios.post(url.Add_PRODUCTS, data);
    if (response.status >= 200 || response.status <= 299) return response;
    throw response;
  } catch (error) {
    return error;
  }
};

export const updateProduct = async (productId: any, data: any) => {
  try {
    const response = await axios.put(
      `${url.UPDATE_PRODUCTS}/${productId}`,
      data
    );

    if (response.status === 200) return { success: true, data: response.data };

    return { success: false, data: response.data };
  } catch (error: any) {
    return { succes: false, erorr: error.response };
  }
};

export const deleteProduct = async (productId: any) => {
  try {
    const response = await axios.delete(`${url.DELETE_PRODUCTS}/${productId}`);

    if (response.status === 200) return { success: true, data: response.data };

    return { success: false, data: response.data };
  } catch (error: any) {
    return { succes: false, erorr: error.response };
  }
};
