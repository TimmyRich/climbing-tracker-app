import React from "react";
import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native";

export default function ClimberLogin() {
    return (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Your QR Code</Text>
            {/* Replace this with your QR Code or ClimberLogin component */}
            <ClimberLogin />
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
  }
});

