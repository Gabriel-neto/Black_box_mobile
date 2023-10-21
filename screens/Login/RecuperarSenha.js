import { View, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/login/RecuperarSenha';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// component
const RecuperarSenha = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/img/login/login_topo_cinza.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{'Recupere\nsua Senha!'}</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          keyboardType="email-adress"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Enviar código</Text>
          <FontAwesome name="arrow-right" size={15} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:30}} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.cancelar}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RecuperarSenha;
