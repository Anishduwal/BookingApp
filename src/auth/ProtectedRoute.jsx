import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import api from "../api/axios";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(null); 
  // null = loading, true = valid, false = invalid

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await api.get("/auth/profile");
        setIsValid(true);
      } catch (error) {
        try {
          const refreshToken = localStorage.getItem("refreshtoken");

          const refreshResponse = await api.post("/auth/refresh", {
            refreshToken,
          });

          localStorage.setItem(
            "accesstoken",
            refreshResponse.data.accessToken
          );
          localStorage.setItem(
            "refreshtoken",
            refreshResponse.data.refreshToken
          );

          setIsValid(true);
        } catch (refreshError) {
          setIsValid(false);
        }
      }
    };

    if (token) {
      verifyUser();
    } else {
      setIsValid(false);
    }
  }, [token]);

  // 🚀 Handle redirect properly
  useEffect(() => {
    if (isValid === false) {
      navigate("/login", { replace: true });
    }
  }, [isValid, navigate]);

  // ⏳ While checking
  if (isValid === null) {
    return <div>Loading...</div>;
  }

  // If invalid, navigation already triggered
  if (isValid === false) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
