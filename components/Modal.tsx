import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import colors from 'theme/colors';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  description: string;
  setDescription: (text: string) => void;
  price: string;
  setPrice: (text: string) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onClose, description, setDescription, price, setPrice }) => {
  return (
    <Modal
      animationType="fade"
      presentationStyle="overFullScreen"
        hardwareAccelerated={true}
        statusBarTranslucent={true}
        backdropColor="rgba(0,0,0,0.3)"
        
        
        

      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{ fontSize: 22, color: colors.primary }}>×</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Work Description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Describe the work..."
            multiline
            value={description}
            onChangeText={setDescription}
          />
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.priceInput}
            placeholder="Enter price"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
          {/* You can add a submit button here if needed */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
    padding: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 32,
    marginBottom: 6,
  },
  descriptionInput: {
    height: 100,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingTop: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f4f4f4',
  },
  priceInput: {
    height: 45,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    backgroundColor: '#f4f4f4',
  },
});

export default CustomModal;
