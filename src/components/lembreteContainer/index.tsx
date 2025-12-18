import React from "react";
import { Text, View, Image } from "react-native";
import { style } from "./style";
import Tipografia from "../../themes/tipografia";

type reminderType = "pessoal" | "amigo";

interface LembreteProps {
  titulo: string;
  nomeAmigo?: string;
  type?: reminderType;
}

function CardLembrete({ titulo, nomeAmigo, type }: LembreteProps) {
  //irá receber se for tipo amigo
  const isFriend = type === "amigo";
  return (
    <View style={style.lembreteContainer}>
      <Image source={require("./IconeLembrete.png")} />
      <View style={style.informacoesLembrete}>
        <View style={style.TituloLembrete}>
          <Text style={Tipografia.card}>{titulo}</Text>
        </View>

        {/*vai rederizar apenas se for do tipo amigo*/}

        {isFriend && (
          <View style={style.nomeAmigoLembrete}>
            <Text style={Tipografia.card}>de:{nomeAmigo}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default CardLembrete;
