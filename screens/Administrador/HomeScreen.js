import React, { useState } from "react";
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

const AppContainer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
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
    closeModal();
    setSnackbarMessage("Produto excluído com sucesso!");
    setVisibleSnackbar(true);
  };

  const renderApagarButton = () => {
    console.log();
    return (
      <TouchableOpacity
        style={[styles.swipeAction, styles.rightAction]}
        onPress={() => {
          openModal();
        }}
      >
        <FontAwesome name="trash" style={styles.deleteIcon} />
      </TouchableOpacity>
    );
  };

  const addNewProduct = () => {
    setIsFormVisible(false);
    setSnackbarMessage("Produto adicionado com sucesso!");
    setVisibleSnackbar(true);
  };

  const handleProductEdit = () => {
    setIsFormVisible(true);
  };

  const updateProduct = () => {
    setIsFormVisible(false);
    setSnackbarMessage("Produto atualizado com sucesso!");
    setVisibleSnackbar(true);
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
      {isFormVisible ? (
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setSelectedProduct(false);
                setIsFormVisible(false);
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
          {selectedProduct ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                addNewProduct();
              }}
            >
              <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                updateProduct();
              }}
            >
              <Text style={styles.buttonText}>ADICIONAR</Text>
            </TouchableOpacity>
          )}
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text style={styles.titulo}>Lista de Produtos</Text>
          <ScrollView>
            <GestureHandlerRootView>
              <Swipeable renderRightActions={() => renderApagarButton()}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    handleProductEdit();
                    setSelectedProduct(true);
                  }}
                >
                  <Text style={styles.produto}>Camisa Branca</Text>
                  <Text style={getQtdColor()}>100 unidades</Text>
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
          </ScrollView>
        </View>
      )}
      {!isFormVisible ? (
        <FAB
          icon="plus"
          color="#0D5C63"
          style={styles.fab}
          onPress={() => setIsFormVisible(true)}
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
