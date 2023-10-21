import { StyleSheet } from 'react-native';

// Constantes
const COLORS = {
  primary: '#0D5C63',
  secondary: '#EBEBEB',
  textDark: '#706E6E',
  textLight: 'white',
};

// Estilos
const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  content: {
    paddingHorizontal: 25,
    marginTop: '-20%',
  },
  image: {
    width: '100%',
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  titleRegister: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleBlackbox: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  titleBlackboxRegister: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
  },
  titleApresentacao: {
    fontSize: 25,
    marginBottom: 35,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 20,
    marginBottom: 25,
    paddingLeft: 8,
    color: COLORS.textDark,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  button: {
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: 24,
    marginEnd: 15,
  },
  titleCadastro: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 50,
  },
  titleCadastro1: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  recSenha: {
    textAlign: 'center',
    color: COLORS.primary,
  }
  
});

export default LoginStyles;
