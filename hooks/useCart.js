import axios from 'axios'
import { useUser } from '../context/UserContext'

export const useAddToCart = () => {
  const { userGuid } = useUser() 
  
  const addToCart = async (variantID) => {
    try {
      const response = await axios.post(
        'https://store.vrunibex.com/mobile2/mbOrder/AddToCart',
        { VariantID: variantID, quantity: 1, userguid: userGuid }
      );
      return response.data
    } catch (error) {
      console.error(`Error adding to cart:`, error)
      throw error
    }
  }

  return addToCart
}

export const useUpdateCart = () => {
  const { userGuid } = useUser()
  
  const updateCart = async (variantID, quantity) => {
    try {
      const response = await axios.post(
        'https://store.vrunibex.com/mobile2/mbOrder/UpdateCart',
        { VariantID: variantID, quantity, userguid: userGuid }
      );
      return response.data
    } catch (error) {
      console.error(`Error updating cart:`, error)
      throw error
    }
  }

  return updateCart
}

export const useRemoveFromCart = () => {
  const { userGuid } = useUser();
  
  const removeFromCart = async (variantID) => {
    try {
      const response = await axios.post(
        'https://store.vrunibex.com/mobile2/mbOrder/UpdateCart',
        { VariantID: variantID, quantity: 0, userguid: userGuid }
      )
      return response.data
    } catch (error) {
      console.error(`Error removing from cart:`, error)
      throw error
    }
  }

  return removeFromCart
}

