
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your Cource Goal'/>
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List Of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
     padding:50,
     borderWidth:2,
     borderColor:'blue'
  }
});
