import React from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from '../../styles/administrador/DetailsScreen'

const DetailsScreen = () => {
  const { reportValues } = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{'Relatório\n de Vendas'}</Text>
      <ScrollView>
        <View style={styles.dados}>
          {reportValues.qtdTotal ? <Text style={styles.pc}>{reportValues.qtdTotal}</Text> : <Text style={styles.pc}>0</Text>}
          <Text style={styles.pcDescription}>Produtos Cadastrados</Text>
        </View>
        <View style={styles.dados}>
          <Text style={styles.vcm}>
            R${reportValues.custoTotal ? <Text style={styles.vcmNumber}>{reportValues.custoTotal}</Text> : <Text style={styles.vcmNumber}>0</Text>}
          </Text>
          <Text style={styles.vcmDescription}>
            {'Valor de custo\nda mercadoria'}
          </Text>
        </View>
        <View style={styles.dados}>
          <Text style={styles.ltp}>
            R${reportValues.lucroPrevisto ? <Text style={styles.ltpNumber}>{reportValues.lucroPrevisto}</Text> : <Text style={styles.ltpNumber}>0</Text>}
          </Text>
          <Text style={styles.ltpDescription}>Lucro total previsto</Text>
        </View>
        <View style={styles.dados}>
          <Text style={styles.lpv}>
            R${reportValues.lucroVenda ? <Text style={styles.lpvNumber}>{reportValues.lucroVenda}</Text> : <Text style={styles.lpvNumber}>0 </Text>}
          </Text>
          <Text style={styles.lpvDescription}>Lucro p/ Venda</Text>
        </View>
      </ScrollView>
    </View>
  );
}
export default DetailsScreen;
