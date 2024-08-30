import React, { createContext, useContext, useState } from 'react'
import uuid from 'react-native-uuid'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userGuid, setUserGuid] = useState(uuid.v4())

  return (
    <UserContext.Provider value={{ userGuid, setUserGuid }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
