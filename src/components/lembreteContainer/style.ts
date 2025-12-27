import colors from "../../themes/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  lembreteContainer: {
    width:"100%",
    height:64,
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10,
    borderRadius: 24,
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 10, 
    marginBottom: 10,
  },
  commomBackground:{
    backgroundColor:colors.commom
  },
  urgentBackground:{
    backgroundColor:colors.urgent
  },
  importantBackground:{
    backgroundColor:colors.important
  },
  informacoesLembrete: {
    width:285,
    height:54, 
    justifyContent: "center",
    gap:5,
    paddingHorizontal:10,
    paddingVertical:10,
    paddingBottom:10,
    
  },
  containerTitulo: {
    flex:1,
    alignItems: "flex-start",
    
  },
  containerLegenda: {
    marginTop: 1,
  },
  textoTituloCor: {
    color: colors.background 
  },
  textoLegendaCor: {
    color: colors.background, 
  }
});