import colors from "../../themes/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  lembreteContainer: {
    width: '100%', 
    backgroundColor: colors.primary,
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10,
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 12, 
    marginBottom: 10,
  },
  informacoesLembrete: {
    flex: 1, 
    justifyContent: "center",
  },
  TituloLembrete: {
    alignItems: "flex-start",
  },
  nomeAmigoLembrete: {
    marginTop: 0, 
  },
});