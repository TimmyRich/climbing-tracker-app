import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal } from 'react-native';
import ClimberLogin from '../components/ClimberLogin';

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false); // Use state hook to toggle modal visibility

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titleFont}>Climbing Tracker</Text>
      </View>

      {/* Button Group Container */}
      <View style={styles.buttonContainer}>

        {/* Show QR Code */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Show QR Code"
            onPress={() => setModalVisible(true)}
          />
        </View>

        {/* Show Climbing Log */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Show Climbing Log"
            onPress={() => navigation.navigate('ClimbLog')}
          />
        </View>

      </View>

      {/* QR Code Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ClimberLogin setModalVisible={setModalVisible} />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'bisque',
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
  titleFont: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'arial',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonWrapper: {
    marginBottom: 10,
    width: "50%"
  },
});
