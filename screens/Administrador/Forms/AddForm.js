import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../styles/administrador/ListaProdutos';

const ProductForm = () => {
  const handleSubmit = () => {
    }

  return (
    <View>
      <TextInput
        placeholder="Nome do Produto"
        style={styles.input}
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Marca"
        style={styles.input}
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Quantidade"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Preço de Custo"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Preço de Venda"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={() => {}}
      />
      
    </View>
  );
};

export default ProductForm;
