import React, { useState, useContext, createContext } from 'react'

const UserProfileContext = createContext()

export const useUserProfileContext = () => {
  return useContext(UserProfileContext)
}

export const UserContext = ({ children }) => {
  const [userId, setUserId] = useState(1)

  return (
    <UserProfileContext.Provider value={userId}>
      { children }
    </UserProfileContext.Provider>
  )
}