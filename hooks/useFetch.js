import axios from 'axios';

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error
  }
};

export const getCategories = () => {
  return fetchData('https://store.vrunibex.com/mobile2/mbProduct/CategoryList');
};

export const getProductsByCategory = (categoryId) => {
  return fetchData('https://store.vrunibex.com/mobile2/mbProduct/ProductList', { CategoryID: categoryId });
};

export const getProductDetail = (productId) => {
  return fetchData('https://store.vrunibex.com/mobile2/mbProduct/ProductDetail', { productId });
};

export const getProductsBySearchKey = (searchKey) => {
  return fetchData('https://store.vrunibex.com/mobile2/mbProduct/ProductSearch', { searchKey });
};
