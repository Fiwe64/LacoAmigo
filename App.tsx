import { StyleSheet, View } from "react-native";
import Lembrete from "./src/components/lembrete";
import BottomMenu from "./src/components/BottomMenu";
import TopMenu from "./src/components/TopMenu";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/index.routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto"/>
      <Routes/>
    </SafeAreaProvider>
  );
}
