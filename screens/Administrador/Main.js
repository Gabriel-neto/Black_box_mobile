import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//PAGINAS
import HomeScreen from './Pages/HomeScreen';
import DetailsScreen from './Pages/DetailsScreen';
import Perfil from './Pages/Perfil/Perfil';

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'estoque',
      title: 'Estoque',
      focusedIcon: 'list',
      unfocusedIcon: 'list',
    },
    {
      key: 'relatorios',
      title: 'Relatorios',
      focusedIcon: 'trello',
      unfocusedIcon: 'trello',
    },
    {
      key: 'perfil',
      title: 'Perfil',
      focusedIcon: 'user',
      unfocusedIcon: 'user',
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
    const color = focused ? '#0D5C63' : '#ccc';
    return <FontAwesome name={iconName} size={24} color={color} />;
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      inactiveColor="#ccc"
    />
  );
};

export default Main;
