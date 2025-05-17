import React from "react";
import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native";
import QRCode from 'react-native-qrcode-svg'; // Use react-native-qrcode-svg
import { CLIMBER_LOGIN } from '../secrets';

export default function ClimberLogin({ setModalVisible }) {
    return (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Your QR Code</Text>
            {/* QR Code Component */}
            <View style={styles.qrCodePlaceholder}>
              <QRCode value={CLIMBER_LOGIN} size={150}/> 
            </View>
            <Button
              title="Close"
              onPress={() => setModalVisible(false)} // Close the modal
            />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCodePlaceholder: {
    marginBottom: 20,
  },
});

