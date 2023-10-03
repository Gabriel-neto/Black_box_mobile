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
    paddingHorizontal: 25,
  },
  content: {
    flex: 5,
  },
  contentImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
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
    marginTop: 20,
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: COLORS.textLight,
    fontSize: 24,
  },
  buttonSair: {
    borderRadius: 50,
    backgroundColor: '#b23b3b',
    width: '50%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 'auto',
  },
  buttonTextSair: {
    color: COLORS.textLight,
    fontSize: 18,
  },
});

export default LoginStyles;