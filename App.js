import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Click(){
  
  const [contar, setContador] = useState(0);
  function incrementar(){
    setContador(contar+1);
  } return ( 
   
    <View style={styles.container}>
      <View style={styles.caixa}>
      <Text>Você clicou {contar} vezes</Text>
      <Button title='CLICK' onPress={incrementar}/>
      </View>
  </View>

 );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    height:'100%',
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },

  caixa: {
    height:'15%',
    width:'80%',
    alignItems: 'center',
    backgroundColor:'#008080',
    justifyContent: 'center',
    fontSize: 15,
  }
});