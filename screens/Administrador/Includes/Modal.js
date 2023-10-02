import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AppModal = ({ visible, onClose, Texto }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{Texto}</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyle}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Adicione esta linha
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
    borderRadius: 20,
  },
  textStyle: {
    color: 'white',
    paddingHorizontal: 60,
    paddingVertical: 13,
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AppModal;
