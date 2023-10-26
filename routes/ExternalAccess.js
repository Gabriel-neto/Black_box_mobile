import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import RecuperarSenha from "../screens/Login/RecuperarSenha";

const Stack = createStackNavigator();

const ExternalAccess = () => {
  
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
    </Stack.Navigator>
  );
};

export default ExternalAccess;
