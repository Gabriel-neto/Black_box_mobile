import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../../styles/administrador/NovoProduto';

const ProductForm = ({ onAddProduct }) => {
  const [nomeDoProduto, setNomeDoProduto] = useState('');
  const [quantidadeDoProduto, setQuantidadeDoProduto] = useState();
  const [marcaDoProduto, setMarcaDoProduto] = useState('');
  const [precoDoProduto, setPrecoDoProduto] = useState();
  const [precoVendaDoProduto, setPrecoVendaDoProduto] = useState();

  //VARIAVEIS DE ERRO
  const [nomeError, setNomeError] = useState('');
  const [marcaError, setMarcaError] = useState('');
  const [quantidadeError, setQuantidadeError] = useState('');
  const [precoError, setPrecoError] = useState('');
  const [precoVendaError, setPrecoVendaError] = useState('');

  const handleSubmit = () => {
    let isValid = true;

    // Nome do produto
    if (!nomeDoProduto.trim()) {
      isValid = false;
      setNomeError('Nome do produto é obrigatório!');
    } else {
      setNomeError('');
    }

    // Marca
    if (!marcaDoProduto.trim()) {
      isValid = false;
      setMarcaError('Marca é obrigatória!');
    } else {
      setMarcaError('');
    }

    // Quantidade
    if (isNaN(quantidadeDoProduto) || parseFloat(quantidadeDoProduto) <= 0) {
      isValid = false;
      setQuantidadeError('Quantidade deve ser um número positivo!');
    } else {
      setQuantidadeError('');
    }

    // Preço de custo
    if (isNaN(precoDoProduto) || parseFloat(precoDoProduto) <= 0) {
      isValid = false;
      setPrecoError('Preço de custo deve ser um número positivo!');
    } else {
      setPrecoError('');
    }

    // Preço de venda
    if (
      isNaN(precoVendaDoProduto) ||
      parseFloat(precoVendaDoProduto) <= parseFloat(precoDoProduto)
    ) {
      isValid = false;
      setPrecoVendaError('Preço de venda deve ser maior que o preço de custo!');
    } else {
      setPrecoVendaError('');
    }

    if (isValid) {
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
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do Produto"
        style={styles.input}
        value={nomeDoProduto}
        onChangeText={(text) => setNomeDoProduto(text)}
      />
      {nomeError ? <Text style={{ color: 'red' }}>{nomeError}</Text> : null}
      <TextInput
        placeholder="Marca"
        style={styles.input}
        value={marcaDoProduto}
        onChangeText={(text) => setMarcaDoProduto(text)}
      />
      {marcaError ? <Text style={{ color: 'red' }}>{marcaError}</Text> : null}

      <TextInput
        placeholder="Quantidade"
        style={styles.input}
        keyboardType="numeric"
        value={quantidadeDoProduto}
        onChangeText={(text) => setQuantidadeDoProduto(text)}
      />
      {quantidadeError ? (
        <Text style={{ color: 'red' }}>{quantidadeError}</Text>
      ) : null}

      <TextInput
        placeholder="Preço de Custo"
        style={styles.input}
        value={precoDoProduto}
        keyboardType="numeric"
        onChangeText={(text) => setPrecoDoProduto(text)}
      />
      {precoError ? <Text style={{ color: 'red' }}>{precoError}</Text> : null}

      <TextInput
        placeholder="Preço de Venda"
        style={styles.input}
        keyboardType="numeric"
        value={precoVendaDoProduto}
        onChangeText={(text) => {
          setPrecoVendaDoProduto(text);
        }}
      />
      {precoVendaError ? (
        <Text style={{ color: 'red' }}>{precoVendaError}</Text>
      ) : null}

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
