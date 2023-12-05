import { createContext, useState } from 'react';
import {
  signIn,
  signUp,
  updatePerfil
} from '../service/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState();

  const [user, setUser] = useState({
    localId: '',
    idToken: '',
    email: '',
    logado: false,
    senha: '',
    nome: '',
  });

  const login = async (email, senha) => {
    const errorMessage = 'E-mail e senha é obrigatório.';
    const invalidEmail = 'E-mail inválido.';

    if (!email || !senha) {
      setError(errorMessage);
      return;
    }

    // Validar formato de e-mail usando uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(invalidEmail);
      return;
    }

    try {
      const signUser = await signIn(email, senha)
      setUser((prevUser) => ({
        ...prevUser,
        localId: signUser.localId,
        idToken: signUser.idToken,
        email: email,
        nome: signUser.displayName,
        logado: true,
        cnpj: '33.333.333/0001-33',
        empresa: 'Blackbox',
      }));
      setError(null);

    } catch (e) {
      setError(e.message);
    }

  };

  const register = async (nome, email, senha, confirmeSenha) => {
    const errorMessage = {
      missingFields: 'Preencha todos os dados corretamente',
      passwordMismatch: 'As senhas não conferem.',
      invalidEmail: 'Email inválido. Certifique-se de usar um formato válido.',
      weakPassword: 'A senha deve ter pelo menos 8 caracteres',
    };

    if (!nome || !email || !senha || !confirmeSenha) {
      setError(errorMessage.missingFields);
      return;
    }

    // Validar formato de e-mail usando uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(errorMessage.invalidEmail);
      return;
    }

    if (senha !== confirmeSenha) {
      setError(errorMessage.passwordMismatch);
      return;
    }

    // Adicionar política de senha forte
    if (senha.length < 8) {
      setError(errorMessage.weakPassword);
      return;
    }

    // Se todas as validações passarem, registre o usuário
    try {
      const register = await signUp(nome, email, senha)
      setUser({
        localId: register.localId,
        idToken: register.idToken,
        email: email,
        senha: senha,
        logado: true,
        nome: nome,
        cnpj: '33.333.333/0001-33',
        empresa: 'Blackbox',
      });
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  const logout = () => {
    setUser((prevUser) => ({
      ...prevUser,
      logado: false,
    }));
  };

  const updateProfile = async (dados) => {
    const errorMessage = 'Preencha todos os dados corretamente.';
    const invalidEmail = 'E-mail invalido.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dados.email)) {
      setError(invalidEmail);
      return;
    }

    if (!dados.email || !dados.nome || !dados.cnpj || !dados.empresa) {
      setError(errorMessage);
      return;
    }

    try {
      await updatePerfil(user.idToken, dados.email, dados.nome)
      setUser((prevUser) => ({
        ...prevUser,
        email: dados.email,
        logado: true,
        nome: dados.nome,
        cnpj: dados.cnpj,
        empresa: dados.empresa,
      }));
      setModalVisible(true);
    } catch (e) {
      setError(e.message);
    }
  };

  const emailRecuperaSenha = (recuperaEmail) => {
    const errorMessage = 'Campo e-mail é obrigatório.';
    const invalidEmail = 'E-mail inválido.';

    if (!recuperaEmail) {
      setError(errorMessage);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recuperaEmail)) {
      setError(invalidEmail);
      return;
    }
  };

  const contexto = {
    user,
    login,
    logout,
    updateProfile,
    modalVisible,
    setModalVisible,
    error,
    register,
    emailRecuperaSenha,
  };
  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
