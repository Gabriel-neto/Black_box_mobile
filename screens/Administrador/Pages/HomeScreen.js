//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Lista from './Estoque/ListaProduto'

export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option
  render() {
    return (
      <Lista/>
    );
  }
}