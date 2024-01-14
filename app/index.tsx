import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { H1 } from 'tamagui';

export default function Page() {
  
  return (
    <View>
      <H1>Who Am I</H1>
      <Text>I'm software engineer and product manager. working at Novasell (Raksul, inc subsidiary)</Text>
      <H1>Who Am I</H1>
      <H1>Who Am I</H1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
    margin: 10,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontFamily: 'Inter',
    fontSize: 15,
  }
});
