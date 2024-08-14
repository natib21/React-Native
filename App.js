
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
       <Text style={styles.dummyText}> Another piece of</Text>
      </View>
      <Text style={styles.dummyText}>
          Hello World</Text>
      <Button title='Tap Me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform:'uppercase',
  
  },
  dummyText: {
    margin:16,
    padding:16,
    borderWidth:2,
    borderColor:'blue',
  }
});
