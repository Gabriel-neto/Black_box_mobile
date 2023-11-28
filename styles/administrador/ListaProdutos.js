import { StyleSheet } from 'react-native';

// Constantes
const COLORS = {
  primary: '#0D5C63',
  secondary: '#EBEBEB',
  textDark: '#706E6E',
  textLight: 'white',
};
// Estilos
const ListaProdutosStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 16,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '400',
    paddingBottom: 20,
    paddingTop: 45,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    paddingLeft: 15,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 45,
    paddingBottom: 20,
  },
  actionIcon: {
    fontSize: 35,
    paddingRight: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 15,
  },
  produto: {
    fontSize: 20,
    color: '#343434',
    fontWeight: '400',
  },
  qtd: {
    fontSize: 18,
    color: '#343434',
    fontWeight: '300',
  },
  qtdRed: {
    fontSize: 18,
    color: '#CB0000',
    fontWeight: '300',
  },
  qtdYellow: {
    fontSize: 18,
    color: '#F2AF03',
    fontWeight: '300',
  },

  // ESTILOS DO SWIPE
  swipeAction: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  rightAction: {
    backgroundColor: '#0D5C63',
  },
  deleteIcon: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#C8C7C7',
    //paddingVertical: 15,
    marginBottom: 15,
  },
  button: {
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 125,
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
  error: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20
  },
});

export default ListaProdutosStyles;
