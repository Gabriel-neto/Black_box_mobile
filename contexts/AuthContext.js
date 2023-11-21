import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState();

  const [user, setUser] = useState({ email: "", logado: false });

  const login = (email, senha) => {
    if (email !== "" && senha !== "") {
      setUser(
        {
          email: email,
          logado: true,
          nome: "Usuario",
          cnpj: "33.333.333/0001-33",
          empresa: "Blackbox"
        });
      setError(null);
    } else {
      setError("E-mail ou senha invalidos");
    }
  };

  const logout = () => {
    setUser({ email: "", logado: false });
  };

  const updateProfile = (dados) => {
    setUser({
      email: dados.email,
      logado: true,
      nome: dados.nome,
      cnpj: dados.cnpj,
      empresa: dados.empresa
    })
    setModalVisible(true)
  }

  const contexto = {
    user,
    login,
    logout,
    updateProfile,
    modalVisible,
    setModalVisible,
    error
  };
  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
