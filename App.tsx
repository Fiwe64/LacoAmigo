import { StyleSheet,View } from 'react-native';
import Lembrete from './src/components/lembreteContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <Lembrete titulo='Preencher Questionário' type='amigo' nomeAmigo='Claudio' urgencyType='commom'/>
      <Lembrete titulo='Fazer Tarefa' urgencyType='urgent'/>
      <Lembrete titulo='Responder Amigo querido' urgencyType='important'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10
  }
});
