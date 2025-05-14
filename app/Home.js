import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Use react-native-qrcode-svg
import { CLIMBER_LOGIN } from '../secrets';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleFont}>Climbing Tracker</Text>
        </View>
        <View style={styles.body}>
          <Button
            title="Show QR Code"
            onPress={() => setModalVisible(true)} // Show the modal
          />
        </View>
      </View>

      {/* Modal for QR Code */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on back button
      >
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
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'bisque',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    paddingBottom: 20,
    paddingTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowRadius: 1,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleFont: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'arial',
    textTransform: 'uppercase',
  },
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