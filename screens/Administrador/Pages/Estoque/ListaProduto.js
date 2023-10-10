import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

import Item from './Item';
import BotaoAdd from './BotaoAdd'

const Lista = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 50,
      backgroundColor: '#EBEBEB',
    },
    titulo: {
      fontSize: 28,
      fontWeight: '400',
      marginHorizontal: 16,
      paddingBottom: 25,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>
      <ScrollView>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
      <BotaoAdd />
    </View>
  );
};

export default Lista;
