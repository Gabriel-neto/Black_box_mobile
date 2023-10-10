import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../../../styles/administrador/NovoProduto';

const EditProductForm = ({ product, onSave }) => {
  const [nomeDoProduto, setNomeDoProduto] = useState(product.nome);
  const [quantidadeDoProduto, setQuantidadeDoProduto] = useState(
    product.quantidade
  );
  const [marcaDoProduto, setMarcaDoProduto] = useState(product.marca);
  const [precoDoProduto, setPrecoDoProduto] = useState(product.preco);
  const [precoVendaDoProduto, setPrecoVendaDoProduto] = useState(
    product.precoVenda
  );


  const handleSubmit = () => {
    
      const editedProduct = {
        nome: nomeDoProduto,
        marca: marcaDoProduto,
        preco: precoDoProduto,
        precoVenda: precoVendaDoProduto,
        quantidade: quantidadeDoProduto,
      };

      onSave(editedProduct);
    }

  return (
    <View>
      <TextInput
        placeholder="Nome do Produto"
        style={styles.input}
        value={nomeDoProduto}
        onChangeText={(text) => setNomeDoProduto(text)}
      />

      <TextInput
        placeholder="Marca"
        style={styles.input}
        value={marcaDoProduto}
        onChangeText={(text) => setMarcaDoProduto(text)}
      />

      <TextInput
        placeholder="Quantidade"
        style={styles.input}
        value={quantidadeDoProduto}
        onChangeText={(text) => setQuantidadeDoProduto(text)}
      />

      <TextInput
        placeholder="Preço de Custo"
        style={styles.input}
        value={precoDoProduto}
        onChangeText={(text) => setPrecoDoProduto(text)}
      />

      <TextInput
        placeholder="Preço de Venda"
        style={styles.input}
        value={precoVendaDoProduto}
        onChangeText={(text) => {
          setPrecoVendaDoProduto(text);
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProductForm;
