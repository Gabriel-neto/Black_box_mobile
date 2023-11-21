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
  const [modalVisible, setModalVisible] = useState(false);
  const { user, logout } = useContext(AuthContext)

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
          placeholder="Nome"
          keyboardType="default"
        />

        <TextInput
          label="E-mail"
          underlineColor="transparent"
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput
          label="Empresa"
          underlineColor="transparent"
          style={styles.input}
          placeholder="Empresa"
          keyboardType="default"
        />

        <TextInput
          label="CNPJ"
          underlineColor="transparent"
          style={styles.input}
          placeholder="CNPJ"
          keyboardType="default"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
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
