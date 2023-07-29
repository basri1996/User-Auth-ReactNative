import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider
      value={{ authToken, authenticate, logout, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
