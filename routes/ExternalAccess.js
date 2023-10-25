import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import RecuperarSenha from "../screens/Login/RecuperarSenha";
import InternalAccess from "./InternalAccess";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Stack = createStackNavigator();

const ExternalAccess = () => {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {!user.logado ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        </>
      ) : (
        <Stack.Screen name="InternalAccess" component={InternalAccess} />
      )}
    </Stack.Navigator>
  );
};

export default ExternalAccess;
