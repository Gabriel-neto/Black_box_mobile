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
        placeholder="Nome do Produto"
        style={styles.input}
        onChangeText={(text) => {
          setNome(text);
        }}
        value={nome}
      />
      <TextInput
        placeholder="Marca"
        style={styles.input}
        onChangeText={(text) => {
          setMarca(text);
        }}
        value={marca}
      />
      <TextInput
        placeholder="Quantidade"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setQtd(text);
        }}
        value={qtd}
      />
      <TextInput
        placeholder="Preço de Custo"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => {
          setPrecoCusto(text);
        }}
        value={precoCusto}
      />
      <TextInput
        placeholder="Preço de Venda"
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
