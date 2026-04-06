import colors from "../../themes/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 24,
    flexDirection: "row",
     backgroundColor: "white",
    alignItems: "stretch", //faz os filhos terem a mesma altura.
    overflow: "hidden", // ← isso faz o container recortar os filhos
   // sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,

   
  },
  urgencyColor: {
    width: 25,
  },
  informationBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  titulo:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#263238",
  },
  descricao:{
    fontSize: 13,
    color: "#263238",
  },
  timeInformationBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 4,
  },
  dataLabel:{
    fontSize: 12,
    color: "#263238",
  },
  badge:{
    backgroundColor: "#FF6B6B",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  botao: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  botaoText: {
    fontSize: 18,
    color: "#263238",
    letterSpacing: 2,
  },

  friendNameInformationContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 10,
  }
});
