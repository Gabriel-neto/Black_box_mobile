import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/login/Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// component
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');

  const handleSubmit = () => {
    console.log(email.search('@'));
    console.log(email)
    let isValid = true;

    // Validação do e-mail
    if (!email.trim()) {
      isValid = false;
      setEmailError('Preencha o campo de e-mail corretamente');
    } else {
      setEmailError('');
    }

    // Validação da senha
    if (!senha.trim()) {
      isValid = false;
      setSenhaError('O campo de senha é obrigatorio');
    } else {
      setSenhaError('');
    }

    if (isValid) {
      navigation.navigate('Main');
    }
  };

  return (
    
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/login/login_topo_cinza.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao</Text>
        <Text style={styles.titleBlackbox}>Blackbox!</Text>

        <Text style={styles.titleApresentacao}>
          Sistema de controle{'\n'}de estoque
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-adress"
        />
        {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />
        {senhaError ? <Text style={{ color: 'red' }}>{senhaError}</Text> : null}

        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.recSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSubmit();
          }}>
          <Text style={styles.buttonText}>Entrar</Text>
          <FontAwesome name="arrow-right" size={15} color="white" />
        </TouchableOpacity>

        <Text style={styles.titleCadastro}>É o seu primeiro acesso?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.titleCadastro1}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
