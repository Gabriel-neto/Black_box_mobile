import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../../../styles/administrador/ListaProdutos";
import { ProductsContext } from "../../../contexts/ProductsContext";

const ProductForm = () => {
  const { products, addProduct, closeForm } = useContext(ProductsContext);
  const [nome, setNome] = useState("");
  const [qtd, setQtd] = useState();

  const handleSubmit = () => {};

  return (
    <ScrollView>
      <TextInput
        placeholder="Nome do Produto"
        style={styles.input}
        onChangeText={(text) => {setNome(text)}}
        value={nome}
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
        onChangeText={(text) => {setQtd(text)}}
        value={qtd}
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
        onPress={() => {addProduct(nome, qtd), console.log(nome, qtd), console.log(products), setNome(""), setQtd("")}}>
        <Text style={styles.buttonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductForm;
