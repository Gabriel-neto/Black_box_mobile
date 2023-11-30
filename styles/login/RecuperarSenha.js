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
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 27,
    fontWeight: '400',
    textAlign: 'center',
    padding: 0,
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
    marginTop: 50,
    textAlign: 'center'

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
    marginEnd: 15,
  },
  cancelar: {
    backgroundColor: 'white',
    borderRadius: 50,
    color: COLORS.primary,
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
    paddingVertical: 10,
  },
  error: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  }
});

export default LoginStyles;