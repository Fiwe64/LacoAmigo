import { StyleSheet, View } from "react-native";
import Lembrete from "./src/components/lembreteContainer";
import BottomMenu from "./src/components/BottomMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <Lembrete titulo="Teste" urgencyType="commom"/>
      <Lembrete titulo="Teste" urgencyType="important"/>
      <Lembrete titulo="Teste" urgencyType="urgent"/>
    <BottomMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:150,
  }
});
