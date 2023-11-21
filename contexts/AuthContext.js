import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", logado: false });

  const login = (email, senha) => {
    if (email !== "" && senha !== "") {
      setUser({ email, logado: true });
    }
  };
  
  const logout = () => {
    setUser({ email: "", logado: false });
  };

  const contexto = {
    user,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
