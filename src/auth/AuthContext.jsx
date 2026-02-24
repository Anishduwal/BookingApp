import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("accesstoken")
  );

  const login = (jwt, refresh) => {
    localStorage.setItem("accesstoken", jwt);
    localStorage.setItem("refreshtoken", refresh);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("accesstoken");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
