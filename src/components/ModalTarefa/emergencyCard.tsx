import React from "react";
import { View,StyleSheet,Text } from "react-native";
import colors from "../../themes/colors";


interface EmergencyCardProps{
    title:string;
    emergency?: number;
    
}


export function EmergencyCard({title,emergency}:EmergencyCardProps){

    const cardBackground = ()=> 
        emergency===2?colors.important:
        emergency===3?colors.urgent: colors.primary;
    return(
    <View style={[style.container,{backgroundColor:cardBackground()}]}>
        <Text style={style.title}>{title}</Text>
    </View>);
}




const style = StyleSheet.create({
    container:{
        // width:100,
        // height:30,
        padding:10,
        gap:10,
        alignItems:"center",
        alignContent:"center",

    },
    title:{
        fontFamily:"Inter",
        fontSize:15,
        color:"#ffff"
    }
});