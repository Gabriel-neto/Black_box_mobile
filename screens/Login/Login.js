import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/login/Style';
import { IconButton } from 'react-native-paper';

// component
const Login = ({ navigation }) => {
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
          keyboardType="email-adress"
        />

        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Botão pressionado')}>
          <Text style={styles.buttonText}>Entrar</Text>
          <IconButton icon="arrow-right" color="white" size={20} />
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
