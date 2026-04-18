import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/index.routes";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ModalTarefas } from "./src/components/ModalTarefa";
import { LembreteProvider } from "./src/contexts/ReminderContext";

export default function App() {
  return (
    <LembreteProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Routes />
        <ModalTarefas/>
      </SafeAreaProvider>
    </LembreteProvider>
  );
}
