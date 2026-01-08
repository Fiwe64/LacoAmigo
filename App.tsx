import { StyleSheet, View } from "react-native";
import Lembrete from "./src/components/lembrete";
import BottomMenu from "./src/components/BottomMenu";
import TopMenu from "./src/components/TopMenu";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <TopMenu />
      <Lembrete titulo="Marcar um Médico" urgencyType="commom" />
      <Lembrete titulo="Marcar um Médico" urgencyType="commom" />
      <BottomMenu/>
    </View>
    */

    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "flex-start",
    paddingTop: 60,
  },
});
