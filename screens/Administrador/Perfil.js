import React, { useState } from "react";

import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Text, TextInput } from 'react-native-paper';

import styles from "../../styles/perfil/Style";
import { useNavigation } from "@react-navigation/native";
import AppModal from "./Includes/ModalPerfil";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Perfil = () => {
  const navigation = useNavigation();
  const { user, logout, updateProfile, modalVisible, setModalVisible } = useContext(AuthContext)
  const [nome, setNome] = useState(user.nome);
  const [email, setEmail] = useState(user.email);
  const [empresa, setEmpresa] = useState(user.empresa);
  const [cnpj, setCnpj] = useState(user.cnpj);


  const handleProfile = () => {
    const dados = {
      nome: nome,
      email: email,
      empresa: empresa,
      cnpj: cnpj
    }
    updateProfile(dados)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentImage}>
        <Image
          source={require("../../assets/img/perfil/foto_perfil.png")}
          style={styles.image}
        />

      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo {user.email}</Text>

        <TextInput
          label="Nome"
          underlineColor="transparent"
          style={styles.input}
          value={nome}
          onChangeText={(text) => { setNome(text) }}
          placeholder="Nome"
          keyboardType="default"
        />

        <TextInput
          label="E-mail"
          underlineColor="transparent"
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text) }}
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput
          label="Empresa"
          underlineColor="transparent"
          style={styles.input}
          value={empresa}
          onChangeText={(text) => { setEmpresa(text) }}
          placeholder="Empresa"
          keyboardType="default"
        />

        <TextInput
          label="CNPJ"
          underlineColor="transparent"
          style={styles.input}
          value={cnpj}
          onChangeText={(text) => { setCnpj(text) }}
          placeholder="CNPJ"
          keyboardType="default"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleProfile()}
        >
          <Text style={styles.buttonText}>Salvar perfil</Text>
        </TouchableOpacity>

        <View style={styles.contentImage}>
          <TouchableOpacity
            style={styles.buttonSair}
            onPress={() => logout()}
          >
            <Text style={styles.buttonTextSair}>Sair</Text>
          </TouchableOpacity>
        </View>

        {/* MODAL */}
        <AppModal
          Texto="Perfil salvo com sucesso !!"
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </ScrollView>
  );
};

export default Perfil;
