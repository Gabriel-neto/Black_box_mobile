import { StyleSheet } from 'react-native';

// Constantes
const COLORS = {
  primary: '#0D5C63',
  secondary: '#EBEBEB',
  textDark: '#706E6E',
  textLight: 'white',
};
// Estilos
const DetailsScreen = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#EBEBEB',
      paddingHorizontal: 16,
    },
    titulo: {
      fontSize: 30,
      textAlign: 'center',
      lineHeight: 30,
      borderBottomWidth: 1,
      paddingTop: 60,
      paddingBottom: 20,
    },
    dados: {
      alignItems: 'center',
      paddingVertical: 25,
    },
    pc: {
      paddingTop: 20,
      color: '#0D5C63',
      fontWeight: '400',
      fontSize: 60,
      lineHeight: 50,
    },
    pcDescription: {
      fontSize: 20,
      color: '#4B4848',
      fontWeight: '300',
    },
    vcm: {
      fontSize: 24,
      color: '#0D5C63',
    },
    vcmNumber: {
      fontSize: 48,
    },
    vcmDescription: {
      fontSize: 20,
      lineHeight: 20,
      color: '#4B4848',
      fontWeight: '300',
    },
    ltp: {
      fontSize: 22,
      color: '#0D5C63',
    },
    ltpNumber: {
      fontSize: 40,
    },
    ltpDescription:{
      fontSize: 18,
      color: '#4B4848',
      fontWeight: '300',
    },
    lpv:{
      fontSize: 18,
      color: '#0D5C63',
    },
    lpvNumber:{
      fontSize: 36,
    },
    lpvDescription:{
      fontSize: 16,
      color: '#4B4848',
      fontWeight: '300',
    }
});

export default DetailsScreen;
