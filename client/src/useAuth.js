import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem("userinfo")));
  const [users, setUsers] = useState([])

  const baseURL = "http://localhost:5000";
  const values = {
    userInfo,
    setUserInfo,
    users,
    setUsers,
    baseURL,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
