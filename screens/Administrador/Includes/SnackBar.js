import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const SnackBar = ({ visible, text, onDismiss }) => {
  return (
    <View style={styles.containers}>
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        duration={Snackbar.DURATION_SHORT}
        action={{
          label: 'Fechar',
        }}>
        {text}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SnackBar;
