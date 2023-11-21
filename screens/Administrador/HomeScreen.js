import React, { useState, useContext } from "react";
import ProductForm from "./Forms/AddForm";
import EditProductForm from "./Forms/EditForm";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FAB } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppModal from "./Includes/Modal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import styles from "../../styles/administrador/ListaProdutos";
import SnackBar from "./Includes/SnackBar";

import { ProductsContext } from "../../contexts/ProductsContext";

const AppContainer = () => {
  const { products, form, openForm, closeForm, findProduct, removeProduct, visibleSnackbar, snackbarMessage, setVisibleSnackbar} =
    useContext(ProductsContext);
  const [isModalVisible, setIsModalVisible] = useState();
  const [selectedProduct, setSelectedProduct] = useState(false);

  //FUNÇÃO PARA ABRIR O MODAL
  const openModal = () => {
    setIsModalVisible(true);
  };

  //FUNÇÃO PARA FECHAR O MODAL
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // BOTAO DE APAGAR
  const handleDeleteProduct = () => {
    removeProduct(products)
    closeModal();
  };

  const renderApagarButton = (products) => {
    
    return (
      <TouchableOpacity
        style={[styles.swipeAction, styles.rightAction]}
        onPress={() => {
          openModal();
          findProduct(products)
        }}
      >
        <FontAwesome name="trash" style={styles.deleteIcon} />
      </TouchableOpacity>
    );
  };

  //Muda a cor do QTD
  const getQtdColor = (number) => {
    if (number < 10) {
      return styles.qtdRed;
    } else if (number > 10 && number < 20) {
      return styles.qtdYellow;
    } else {
      return styles.qtd;
    }
  };

  return (
    <View style={styles.container}>
      {form ? (
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setSelectedProduct(false);
                closeForm();
              }}
            >
              <FontAwesome name="angle-left" style={styles.actionIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>
              {selectedProduct ? "Editar Produto" : "Adicionar Produto"}
            </Text>
          </View>
          <ScrollView>
            {selectedProduct ? <EditProductForm /> : <ProductForm />}
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text style={styles.titulo}>Lista de Produtos</Text>
          <ScrollView>
            {products.map((products, index) => (
              <GestureHandlerRootView key={index}>
                <Swipeable renderRightActions={() => renderApagarButton(products)}>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      findProduct(products);
                      setSelectedProduct(true);
                      openForm();
                    }}
                  >
                    <Text style={styles.produto}>{products.nome}</Text>
                    <Text style={getQtdColor(products.qtd)}>
                      {products.qtd} unidades
                    </Text>
                  </TouchableOpacity>
                </Swipeable>
                {isModalVisible && (
                  <AppModal
                    visible={isModalVisible}
                    onClose={closeModal}
                    onConfirm={handleDeleteProduct}
                  />
                )}
              </GestureHandlerRootView>
            ))}
          </ScrollView>
        </View>
      )}
      {!form ? (
        <FAB
          icon="plus"
          color="#0D5C63"
          
          style={styles.fab}
          onPress={() => {openForm();
          setSelectedProduct(false)}}
        />
      ) : null}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 16,
          right: 16,
          paddingVertical: 16,
        }}
      >
        <SnackBar
          visible={visibleSnackbar}
          onDismiss={() => setVisibleSnackbar(false)}
          text={snackbarMessage}
        />
      </View>
    </View>
  );
};

export default AppContainer;
