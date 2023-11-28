import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput, HelperText } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AuthContext } from "../../contexts/AuthContext";
import React, { useState, useContext } from "react";


import styles from '../../styles/login/Style';

// component
const Register = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");
  const { register, error } = useContext(AuthContext);

  const handleRegister =() => {
    register(nome, email, senha, confirmeSenha)
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/img/login/register_img.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.titleRegister}>
          Organize seu{'\n'}negócio e torne-se um
        </Text>
        <Text style={styles.titleBlackboxRegister}>Blackbox!</Text>

        <HelperText type="error" visible={true} style={styles.error}>{error}</HelperText>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          underlineColor="transparent"
          onChangeText={(text) => {
            setNome(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          underlineColor="transparent"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput style={styles.input}
        placeholder="Senha"
        secureTextEntry
        underlineColor="transparent"
        onChangeText={(text) => {
          setConfirmeSenha(text);
        }} />

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          underlineColor="transparent"
          secureTextEntry
          onChangeText={(text) => {
            setSenha(text);
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRegister()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
          <FontAwesome name="arrow-right" size={15} color="white" />
        </TouchableOpacity>

        <Text style={styles.titleCadastro}>Já tem conta?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.titleCadastro1}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
