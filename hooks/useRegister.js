import { useState } from 'react'
import axios from 'axios'

const useRegister = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const register = async (firstName, lastName, cellPhone, email, password) => {
    setError(null);

    try {
      const response = await axios.post(
        'https://store.vrunibex.com/mobile2/mbUser/RegisterUser',
        null,
        {
          params: {
            'Main.FirstName': firstName,
            'Main.LastName': lastName,
            'Main.CellPhone': cellPhone,
            'Main.Email': email,
            'Main.Password': password
          }
        }
      )

      setData(response.data)
    } catch (err) {
      setError(err)
    }
  }

  return { register, error, data }
}

export default useRegister
