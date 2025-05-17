import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function ClimbLog({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titleFont}>Climbing Log</Text>
      </View>
      {/* Home Button */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
          title="Home"
          onPress={() => navigation.goBack()}
          />
        </View>
      </View>
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
    textAlign: 'center'
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