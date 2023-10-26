import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "../../../styles/administrador/ListaProdutos";

const EditProductForm = () => {
  const handleSubmit = () => {};
  return (
    <View>
      <TextInput
        placeholder="Nome do Produto"
        style={styles.input}
        value=''
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProductForm;
