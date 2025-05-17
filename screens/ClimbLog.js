import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';

export default function ClimbLog() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Climb Log!</Text>
      <Button
      title="Go Home"
      onPress={console.log("Go Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
