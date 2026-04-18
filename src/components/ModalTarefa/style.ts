import { StyleSheet } from "react-native";
import colors from "../../themes/colors";





export const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        gap:10,
        paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor: colors.background,
    },
    buttonsBox:{
        alignItems:"flex-start",
        gap:15,
        paddingVertical:10,
        flexDirection:"column",
        width:"100%",
        
    },
    textInput:{
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: colors.primary,
        padding: 10,
        alignItems: 'center',
        width: '100%',
    },
});