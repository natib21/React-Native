
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Cource Goal' style={styles.textInput}/>
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
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%',
    marginRight:8,
    padding:8
  }
});
