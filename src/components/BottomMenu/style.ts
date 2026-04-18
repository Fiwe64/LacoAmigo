import { StyleSheet } from "react-native";
import colors from "../../themes/colors";

export const style = StyleSheet.create({
  bottomMenuContainer: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconFrame: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: 70,
  },
  selectedIconBackground: {
    
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 16,      
    paddingHorizontal: 4,
    paddingVertical: 6,
    gap:6,
  },
  addIconFrame: {
    width: 57,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
    backgroundColor: colors.commom,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  colorText: {
    color: "#fff",
    fontSize: 10,
  },
});


