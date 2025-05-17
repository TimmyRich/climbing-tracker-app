import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal } from 'react-native';
import ClimberLogin from '../components/ClimberLogin';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // Use state hook to toggle modal visibility

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleFont}>Climbing Tracker</Text>
        </View>
        <View style={styles.body}>
          <Button
            title="Show QR Code"
            onPress={() => setModalVisible(true)} // Show the modal on button press
          />
        </View>
      </View>

      {/* Modal for QR Code */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal on hardware back button
      >
        <ClimberLogin setModalVisible={setModalVisible}/> {/* Pass setModalVisible as prop to allow the modal to close itself */}
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
  
});