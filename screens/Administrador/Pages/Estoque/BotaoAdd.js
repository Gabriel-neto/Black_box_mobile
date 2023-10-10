import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, IconButton } from 'react-native-paper';

const BotaoAdd = () => (
  <FAB
    icon= "plus" color="#0D5C63"
    style={styles.fab}
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
})

export default BotaoAdd;