import React, { useState, useContext } from "react";
import {
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, TextInput } from 'react-native-paper';
import styles from "../../../styles/administrador/ListaProdutos";
import { ProductsContext } from "../../../contexts/ProductsContext";

const ProductForm = () => {
  const { addProduct, reportProduct } = useContext(ProductsContext);
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [qtd, setQtd] = useState();
  const [precoCusto, setPrecoCusto] = useState(0);
  const [precoVenda, setPrecoVenda] = useState(0);

  const handleSubmit = () => {
    addProduct(nome, qtd, marca, precoCusto, precoVenda), reportProduct(), setNome(""), setQtd("");
  };

  return (
    <ScrollView>
      <TextInput
        label="Nome do Produto"
        placeholder="Nome do Produto"
        underlineColor="transparent"
        style={styles.input}
        keyboardType="default"
        onChangeText={(text) => {
          setNome(text);
        }}
        value={nome}
      />
      <TextInput
        label="Marca"
        placeholder="Marca"
        underlineColor="transparent"
        style={styles.input}
        keyboardType="default"
        onChangeText={(text) => {
          setMarca(text);
        }}
        value={marca}
      />
      <TextInput
        label="Quantidade"
        placeholder="Quantidade"
        underlineColor="transparent"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setQtd(text);
        }}
        value={qtd}
      />
      <TextInput
        label="Preço de Custo"
        placeholder="Preço de Custo"
        underlineColor="transparent"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setPrecoCusto(text);
        }}
        value={precoCusto}
      />
      <TextInput
        label="Preço de venda"
        placeholder="Preço de Venda"
        underlineColor="transparent"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setPrecoVenda(text);
        }}
        value={precoVenda}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.buttonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductForm;
