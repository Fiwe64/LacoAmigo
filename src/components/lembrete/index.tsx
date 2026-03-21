import React from "react";
import { Text, View, Image } from "react-native";
import { style } from "./style";
import Tipografia from "../../themes/tipografia";
import colors from "../../themes/colors";

interface LembreteProps {
  titulo: string;
  descricao?: string;
  nomeAmigo?: string;
  urgency: number; // a urgencia do lembrete vai de 1 a 3. 1: comum,2: médio, 3: URGENTE
  date: string;
}

function Lembrete({ titulo,descricao, nomeAmigo, urgency, date }: LembreteProps) {
  
  const urgencyColorBackground = () =>  urgency===1 ? colors.commom : urgency === 2 ? colors.important : urgency === 3 ? colors.urgent : colors.commom;

  return (<View style={style.container}>
      <View style={[style.urgencyColor,{backgroundColor: urgencyColorBackground()}]}>

      </View>
      <View style={[style.informationBox,{justifyContent:descricao? "center" : "flex-start"}   
      ]}>
        <Text style={style.titulo}>{titulo}</Text>
        {descricao && <Text style={style.descricao}>{descricao}</Text>}
      </View>
       <View style={style.timeInformationBox}>
        <Text style={style.dataLabel}>Data Limite</Text>
        <View style={style.badge}>
          <Text style={style.badgeText}>{date}</Text>
        </View>
       </View>
      <View style={style.botao}>
        <Text style={style.botaoText}>...</Text>
      </View>
     
    </View>
  );
}

export default Lembrete;
