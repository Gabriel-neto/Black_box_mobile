import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../../styles/administrador/NovoProduto';

const ProductForm = ({ onAddProduct }) => {
  const [nomeDoProduto, setNomeDoProduto] = useState('');
  const [quantidadeDoProduto, setQuantidadeDoProduto] = useState();
  const [marcaDoProduto, setMarcaDoProduto] = useState('');
  const [precoDoProduto, setPrecoDoProduto] = useState();
  const [precoVendaDoProduto, setPrecoVendaDoProduto] = useState();



  const handleSubmit = () => {
   
      const newProduct = {
        nome: nomeDoProduto,
        marca: marcaDoProduto,
        preco: precoDoProduto,
        precoVenda: precoVendaDoProduto,
        quantidade: quantidadeDoProduto,
      };

      onAddProduct(newProduct);

      setNomeDoProduto('');
      setMarcaDoProduto('');
      setQuantidadeDoProduto('');
      setPrecoDoProduto('');
      setPrecoVendaDoProduto('');
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
        keyboardType="numeric"
        value={quantidadeDoProduto}
        onChangeText={(text) => setQuantidadeDoProduto(text)}
      />


      <TextInput
        placeholder="Preço de Custo"
        style={styles.input}
        value={precoDoProduto}
        keyboardType="numeric"
        onChangeText={(text) => setPrecoDoProduto(text)}
      />

      <TextInput
        placeholder="Preço de Venda"
        style={styles.input}
        keyboardType="numeric"
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
        <Text style={styles.buttonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductForm;
