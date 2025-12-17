import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lembrete from './src/components/lembreteContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <Lembrete titulo='Teste'/>
      <Lembrete titulo='Fazer Tarefa'/>
      <Lembrete titulo='Fazer Tarefa'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  }
});
