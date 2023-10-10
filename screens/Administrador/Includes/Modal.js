import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AppModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Tem certeza que deseja excluir esse item?
          </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyleClose}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonDetele]}
            onPress={() => {
              onConfirm && onConfirm();
              onClose();
            }}>
            <FontAwesome name="trash" style={styles.actionIcon} />
            <Text style={styles.textStyleDelete}>Excluir</Text>
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
  buttonDetele: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FE0000',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 50,
  },
  textStyleClose: {
    color: '#706E6E',
    marginHorizontal: 10,
    paddingVertical: 13,
    fontSize: 16,
  },
  textStyleDelete: {
    color: '#FE0000',
    marginHorizontal: 10,
    paddingVertical: 13,
    fontSize: 16,
  },
  actionIcon: {
    fontSize: 20,
    color: '#FE0000',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AppModal;
