import { useState } from 'react'
import axios from 'axios'

const useLogin = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const login = async (email, password) => {
    setError(null);

    try {
      const response = await axios.post(
        `https://store.vrunibex.com/mobile2/mbUser/Login`,
        null,
        {
          params: {
            Email: email,
            Password: password
          }
        }
      );

      setData(response.data)
    } catch (err) {
      setError(err)
    } 
  }

  return { login, error, data }
}

export default useLogin
