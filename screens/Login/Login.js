import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, TextInput } from 'react-native-paper';
import React, { useState, useContext } from "react";
import styles from "../../styles/login/Style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../../contexts/AuthContext";

// component
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useContext(AuthContext);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/img/login/login_topo_cinza.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao</Text>
        <Text style={styles.titleBlackbox}>Blackbox!</Text>

        <Text style={styles.titleApresentacao}>
          Sistema de controle{"\n"}de estoque
        </Text>

        <TextInput
          label="E-mail"
          style={styles.input}
          placeholder="Email"
          value={email}
          underlineColor="transparent"
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType="email-address"
        />
        <TextInput
          label="Senha"
          underlineColor="transparent"
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
          }}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={styles.recSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login(email, senha);
            console.log(login.email)
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
          <FontAwesome name="arrow-right" size={15} color="white" />
        </TouchableOpacity>

        <Text style={styles.titleCadastro}>É o seu primeiro acesso?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.titleCadastro1}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
