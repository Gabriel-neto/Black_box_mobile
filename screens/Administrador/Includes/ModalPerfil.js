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
          <Text style={styles.modalText}>
            {Texto}
          </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyleClose}>Fechar</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
    borderColor: '#706E6E',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 55,
  },
  textStyleClose: {
    color: '#706E6E',
    marginHorizontal: 10,
    paddingVertical: 13,
    fontSize: 16,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AppModal;
