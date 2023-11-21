import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
} from "react-native";
import { Text, TextInput } from 'react-native-paper';
import styles from "../../../styles/administrador/ListaProdutos";
import { ProductsContext } from "../../../contexts/ProductsContext";

const EditProductForm = () => {
  const { products, indexProduct, updateProduct, closeForm } = useContext(ProductsContext);

  const [nome, setNome] = useState(products[indexProduct].nome)
  const [marca, setMarca] = useState(products[indexProduct].marca);
  const [qtd, setQtd] = useState(products[indexProduct].qtd)
  const [precoCusto, setPrecoCusto] = useState(products[indexProduct].precoCusto);
  const [precoVenda, setPrecoVenda] = useState(products[indexProduct].precoVenda);



  const handleSubmit = () => {
    updateProduct(nome, marca, qtd, precoCusto, precoVenda)
    closeForm()
  };

  return (
    <View>
      <TextInput
        label="Nome do Produto"
        underlineColor="transparent"
        placeholder="Nome do Produto"
        keyboardType="default"
        style={styles.input}
        value={nome}
        onChangeText={(text) => { setNome(text) }}
      />

      <TextInput
        label="Marca"
        underlineColor="transparent"
        placeholder="Marca"
        keyboardType="default"
        style={styles.input}
        value={marca}
        onChangeText={(text) => { setMarca(text) }}
      />

      <TextInput
        label="Quantidade"
        underlineColor="transparent"
        placeholder="Quantidade"
        style={styles.input}
        keyboardType="numeric"
        value={qtd}
        onChangeText={(text) => { setQtd(text) }}
      />
      <TextInput
        label="Preço de Custo"
        underlineColor="transparent"
        placeholder="Preço de Custo"
        style={styles.input}
        keyboardType="numeric"
        value={precoCusto}
        onChangeText={(text) => { setPrecoCusto(text) }}
      />
      <TextInput
        label="Preço de venda"
        underlineColor="transparent"
        placeholder="Preço de Venda"
        style={styles.input}
        keyboardType="numeric"
        value={precoVenda}
        onChangeText={(text) => { setPrecoVenda(text) }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => { handleSubmit() }}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProductForm;
