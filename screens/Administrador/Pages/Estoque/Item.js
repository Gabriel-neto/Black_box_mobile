import { View, Text, Image, StyleSheet } from 'react-native';

// IMPORTS DO SWIPE
import { Swipeable } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// IMPORTS DO MODAL
import React, { useState } from 'react';
import AppModal from '../../Includes/Modal'


const Item = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const styles = StyleSheet.create({
    item: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#E0E0E0',
      paddingVertical: 15,
      marginHorizontal: 16,
    },
    produto: {
      fontSize: 20,
      color: '#343434',
      fontWeight: '400',
    },
    qtd: {
      fontSize: 18,
      color: '#343434',
      fontWeight: '300',
    },

    // ESTILOS DO SWIPE
    swipeAction: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: '100%',
    },
    rightAction: {
      backgroundColor: '#0D5C63',
    },
    actionIcon: {
      color: 'white',
      fontSize: 20,
    },
    //FIM DE ESTILOS DO SWIPE
  });

  //FUNÇÃO PARA ABRIR O MODAL
  const openModal = () => {
    setIsModalVisible(true)
  }

//FUNÇÃO PARA FECHAR O MODAL
  const closeModal = () => {
    setIsModalVisible(false)
  }

  // BOTAO DE APAGAR
  const renderApagarButton = () => {
    return (
      <TouchableOpacity style={[styles.swipeAction, styles.rightAction]} onPress= {openModal}>
        <FontAwesome name="trash" style={styles.actionIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderApagarButton}>
        <View style={styles.item} onPress={()=>{}}>
          <Text style={styles.produto}>Camiseta Branca</Text>
          <Text style={styles.qtd}>100 unidades</Text>
        </View>
      </Swipeable>
        {isModalVisible && <AppModal visible={isModalVisible} onClose={closeModal} />}
    </GestureHandlerRootView>
  );
};

export default Item;
