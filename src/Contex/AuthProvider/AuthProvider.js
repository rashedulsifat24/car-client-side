import React, { createContext } from "react";
import useFirebase from "./../../Hooks/useFirebase";
const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const allcontex = useFirebase();
  return (
    <AuthContex.Provider value={allcontex}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;
