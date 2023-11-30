import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: '',
    logado: false,
    senha: '',
    nome: '',
  });

  const login = (email, senha) => {
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

    const isPasswordValid = senha === user.senha;
    const isEmailValid = email === user.email;

    if (isPasswordValid && isEmailValid) {
      setUser((prevUser) => ({
        ...prevUser,
        email: email,
        logado: true,
        cnpj: '33.333.333/0001-33',
        empresa: 'Blackbox',
      }));
      setError(null);
    } else {
      setError(errorMessage);
    }
  };

  const register = (nome, email, senha, confirmeSenha) => {
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
    setUser({
      email: email,
      senha: senha,
      logado: true,
      nome: nome,
      cnpj: '33.333.333/0001-33',
      empresa: 'Blackbox',
    });
    setError(null);
  };

  const logout = () => {
    setUser((prevUser) => ({
      ...prevUser,
      logado: false,
    }));
  };

  const updateProfile = (dados) => {
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

    setUser((prevUser) => ({
      ...prevUser,
      email: dados.email,
      logado: true,
      nome: dados.nome,
      cnpj: dados.cnpj,
      empresa: dados.empresa,
    }));
    setModalVisible(true);
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
