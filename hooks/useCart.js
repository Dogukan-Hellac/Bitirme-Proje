import axios from 'axios';
import { useUser } from '../context/UserContext'; // UserContext'i içe aktar

// Base URL for the API
const BASE_URL = 'https://store.vrunibex.com/mobile2/mbOrder';

// Custom hook to get userGuid from context
const useUserGuid = () => {
  const { userGuid } = useUser();
  return userGuid;
};

// Function to perform a POST request
const postRequest = async (endpoint, params) => {
  const userGuid = useUserGuid(); // Get userGuid from context

  try {
    const response = await axios.post(
      `${BASE_URL}${endpoint}`,
      null,
      {
        params: {
          ...params,
          userguid: userGuid // Add userGuid to params
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error in ${endpoint}:`, error);
    throw error;
  }
};

// Function to add an item to the cart
export const useAddToCart = () => {
  return (variantID, quantity) => postRequest('/AddToCart', { VariantID: variantID, quantity });
};

// Function to update the cart
export const useUpdateCart = () => {
  return (variantID, quantity) => postRequest('/UpdateCart', { variantID, quantity });
};

export const useRemoveFromCart = () => {
  return (variantID) => postRequest('/UpdateCart', { variantID, quantity: 0 })
}
