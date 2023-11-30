import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { HelperText } from 'react-native-paper';
import styles from '../../styles/login/RecuperarSenha';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../contexts/AuthContext';

// component
const RecuperarSenha = ({ navigation }) => {
  const [recuperaEmail, setRecuperaEmail] = useState('');
  const { emailRecuperaSenha, error } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/img/login/login_topo_cinza.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{'Recupere\nsua Senha!'}</Text>
      <View style={styles.content}>
        <HelperText type="error" visible={true} style={styles.error}>
          {error}
        </HelperText>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          value={recuperaEmail}
          underlineColor="transparent"
          onChangeText={(text) => {
            setRecuperaEmail(text);
          }}
          keyboardType="email-adress"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            emailRecuperaSenha(recuperaEmail);
          }}>
          <Text style={styles.buttonText}>Enviar código</Text>
          <FontAwesome name="arrow-right" size={15} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.cancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RecuperarSenha;
