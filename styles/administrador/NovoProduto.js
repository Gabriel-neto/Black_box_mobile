import { StyleSheet } from 'react-native';

// Constantes
const COLORS = {
  primary: '#0D5C63',
  secondary: '#EBEBEB',
  textDark: '#706E6E',
  textLight: 'white',
};
// Estilos
const NovoProdutosStyles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#C8C7C7',
    paddingVertical: 15,
  },
  button: {
    borderRadius: 50,
    marginTop: 50,
    backgroundColor: '#0D5C63',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },
});

export default NovoProdutosStyles;
