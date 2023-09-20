import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

import styles from '../../styles/login/Style';

// component
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/login/register_img.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.titleRegister}>
          Organize seu{'\n'}negocio e tornese um
        </Text>
        <Text style={styles.titleBlackboxRegister}>Blackbox!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          keyboardType="text"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-adress"
        />

        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Botão pressionado')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
          <IconButton icon="arrow-right" color="white" size={20} />
        </TouchableOpacity>

        <Text style={styles.titleCadastro}>Já tem conta?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.titleCadastro1}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
