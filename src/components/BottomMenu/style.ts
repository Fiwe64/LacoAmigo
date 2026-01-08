import { StyleSheet } from "react-native";
import colors from "../../themes/colors";
import Tipografia from "../../themes/tipografia";

export const style = StyleSheet.create({
    bottomMenuContainer:{
        width:"100%",
        height:"100%",
        flexDirection: "column",
        backgroundColor:colors.primary,
      
    },
  iconContainer: {
   // width: "100%",
    flexDirection: "row",
    gap: 44,
    paddingHorizontal: 34,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  textContainer: {
    width: "100%",
    //alinhamento
    flexDirection: "row",
    justifyContent: "center",
    gap: 45,
    paddingHorizontal: 34,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  colorText: {
    color: colors.background,
    fontSize : Tipografia.legenda.fontSize,
    fontFamily : Tipografia.legenda.fontFamily,
    fontWeight : Tipografia.legenda.fontWeight
  },
  iconFrame: {
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
  },
  addIconFrame: {
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
    backgroundColor: colors.commom,

    //sombra

    // SOMBRA PARA ANDROID
    elevation: 5,

    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2, // Desloca a sombra para baixo
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
