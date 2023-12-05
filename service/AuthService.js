import axios from 'axios';

const API_KEY = 'AIzaSyCoUxDX7UE2xLVs4HQFjTIo9qB7WOhKbVc';

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });
    return response.data
  } catch (e) {
    if (
      e.response.data.error.message === 'INVALID_LOGIN_CREDENTIALS' ||
      e.response.data.error.message === 'INVALID_EMAIL'
    ) {
      throw Error('Usuario/Senha invalidos');
    }
  }
};

const signUp = async (displayName, email, password) => {
  try {
    const register = await axios.post(`${BASE_URL}:signUp?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true,
    });

    await update(register.data.idToken, displayName);
    return register.data
  } catch (e) {
    if (e.response.data.error.message === 'EMAIL_EXISTS') {
      throw Error('E-mail já existe');
    }
  }
};

const update = async (idToken, displayName) => {
  try {
    await axios.post(`${BASE_URL}:update?key=${API_KEY}`, {
      idToken,
      displayName,
      returnSecureToken: true,
    });
  } catch (e) {
    console.log(e);
  }
};

const updatePerfil = async (idToken, email, displayName) => {
    await update(idToken, displayName);
    // try {
    //   const response = await axios.post(`${BASE_URL}:update?key=${API_KEY}`, {
    //     idToken,
    //     displayName,
    //     returnSecureToken: true,
    //   });
      
    // } catch (e) {
    //   console.log(e.message);
    // }
  };

export { signIn, signUp, updatePerfil };
