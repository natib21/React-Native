
import {   Text, View ,Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding:50, flexDirection:'row',justifyContent:'center',alignItems:'stretch', height:300}}>
      <View style={{
        backgroundColor:'red',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
       
      <Text>1</Text>
      </View>
    
      <View 
      style={{
        backgroundColor:'blue',
        flex:2,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text>2</Text>
      </View>
      <View 
         style={{
          backgroundColor:'green',
         
          justifyContent:'center',
          alignItems:'center'
        }} >
        <Text>3</Text>
      </View>
    </View>
  );
}

/* const styles = StyleSheet.create({
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
 */