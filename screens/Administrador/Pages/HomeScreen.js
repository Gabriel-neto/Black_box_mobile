import React, { useState } from 'react';
import ProductForm from './Estoque/AddForm';
import EditProductForm from './Estoque/EditForm';

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppModal from '../Includes/Modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Swipeable } from 'react-native-gesture-handler';
import styles from '../../../styles/administrador/ListaProdutos';
import SnackBar from '../Includes/SnackBar';

const AppContainer = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [productToDelete, setProductToDelete] = useState(null);

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
    setProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.nome !== productToDelete.nome)
    );
    closeModal();
    setProductToDelete(null);

    setSnackbarMessage('Produto excluído com sucesso!');
    setVisibleSnackbar(true);
  };

  const renderApagarButton = (product) => {
    console.log(product);
    return (
      <TouchableOpacity
        style={[styles.swipeAction, styles.rightAction]}
        onPress={() => {
          setProductToDelete(product);
          openModal();
        }}>
        <FontAwesome name="trash" style={styles.deleteIcon} />
      </TouchableOpacity>
    );
  };

  const addNewProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setIsFormVisible(false);

    setSnackbarMessage('Produto adicionado com sucesso!');
    setVisibleSnackbar(true);
  };

  const handleProductEdit = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const updateProduct = (editedProduct) => {
    // BUSCA O INDICE DO PRODUTO
    const productIndex = products.findIndex(
      (prod) => prod.nome === selectedProduct.nome
    );

    const updatedProducts = [...products];

    updatedProducts[productIndex] = editedProduct;

    setProducts(updatedProducts);

    setSelectedProduct(null);

    setIsFormVisible(false);

    setSnackbarMessage('Produto atualizado com sucesso!');
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
            <TouchableOpacity onPress={() => setIsFormVisible(false)}>
              <FontAwesome name="angle-left" style={styles.actionIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>
              {selectedProduct ? 'Editar Produto' : 'Adicionar Produto'}
            </Text>
          </View>
          {selectedProduct ? (
            <EditProductForm product={selectedProduct} onSave={updateProduct} />
          ) : (
            <ProductForm onAddProduct={addNewProduct} />
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.titulo}>Lista de Produtos</Text>
          <ScrollView>
            {products.map((newProduct, index) => (
              <GestureHandlerRootView key={index}>
                <Swipeable
                  renderRightActions={() => renderApagarButton(newProduct)}>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleProductEdit(newProduct)}>
                    <Text style={styles.produto}>{newProduct.nome}</Text>
                    <Text style={getQtdColor(newProduct.quantidade)}>
                      {newProduct.quantidade} unidades
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
      <FAB
        icon="plus"
        color="#0D5C63"
        style={styles.fab}
        onPress={() => setIsFormVisible(true)}
      />
      <View>
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
