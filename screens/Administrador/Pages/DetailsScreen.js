import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    const styles = StyleSheet.create({
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
      fontWeight: '350',
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
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{'Relatório\n de Vendas'}</Text>
      <View style={styles.dados}>
        <Text style={styles.pc}>356</Text>
        <Text style={styles.pcDescription}>Produtos Cadastrados</Text>
      </View>
      <View style={styles.dados}>
        <Text style={styles.vcm}>
          R$<Text style={styles.vcmNumber}>128.791</Text>,63
        </Text>
        <Text style={styles.vcmDescription}>
          {'Valor de custo\nda mercadoria'}
        </Text>
      </View>
      <View style={styles.dados}>
        <Text style={styles.ltp}>
          R$<Text style={styles.ltpNumber}>40.671</Text>,29
        </Text>
        <Text style={styles.ltpDescription}>Lucro total previsto</Text>
      </View>
      <View style={styles.dados}>
        <Text style={styles.lpv}>
          R$<Text style={styles.lpvNumber}>608</Text>,90
        </Text>
        <Text style={styles.lpvDescription}>Lucro p/ Venda</Text>
      </View>
    </View>
  );
  }
}