import React from "react";
import { BottomNavigation } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

//PAGINAS
import HomeScreen from "../screens/Administrador/HomeScreen";
import DetailsScreen from "../screens/Administrador/DetailsScreen";
import Perfil from "../screens/Administrador/Perfil";

const InternalAccess = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "estoque",
      title: "ESTOQUE",
      focusedIcon: "list",
      unfocusedIcon: "list",
    },
    {
      key: "relatorios",
      title: "RELATÓRIOS",
      focusedIcon: "trello",
      unfocusedIcon: "trello",
    },
    {
      key: "perfil",
      title: "PERFIL",
      focusedIcon: "user",
      unfocusedIcon: "user",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    estoque: HomeScreen,
    relatorios: DetailsScreen,
    perfil: Perfil,
  });

  const renderIcon = ({ route, focused }) => {
    const { focusedIcon, unfocusedIcon } = routes.find(
      (r) => r.key === route.key
    );
    const iconName = focused ? focusedIcon : unfocusedIcon;
    const color = focused ? "#0D5C63" : "#BDBDBD";
    return (
      <FontAwesome
        style={styles.icon}
        name={iconName}
        size={24}
        color={color}
      />
    );
  };

  return (
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      inactiveColor="#ccc"
      barStyle={styles.bottomNavigation}
    />
  );
};
const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: "white",
    padding: 10,
  },
  icon: {
    fontWeight: 500,
  },
});

export default InternalAccess;
