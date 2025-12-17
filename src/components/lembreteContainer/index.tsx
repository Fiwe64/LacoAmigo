import React from "react";
import { TouchableOpacity,Text,StyleSheet,View } from "react-native";
import {style} from './style'


interface LembreteProps{
    titulo:string;
}

const Lembrete:React.FC<LembreteProps> =({titulo})=>{
    return(
        <View style={style.lembreteContainer}>
        <Text>{titulo}</Text>
        </View>
    );
};


export default Lembrete;