import React from "react";
import { Text, View, Image } from "react-native";
import { style } from "./style";
import Tipografia from "../../themes/tipografia";

type reminderType = "pessoal" | "amigo";
type reminderUrgency = "commom" | "important" | "urgent";

interface LembreteProps {
  titulo: string;
  nomeAmigo?: string;
  type?: reminderType;
  urgencyType: reminderUrgency;
}

function CardLembrete({ titulo, nomeAmigo, type, urgencyType }: LembreteProps) {
  //irá receber se for tipo amigo

  const isFriend = type === "amigo";

  //objeto de mapeamento para as 3 variantes

  const backgroundVariants = {
    commom: style.commomBackground,
    important: style.importantBackground,
    urgent: style.urgentBackground,
  };
  return (
    <View style={[style.lembreteContainer,backgroundVariants[urgencyType]]}>
      <Image source={require("./IconeLembrete.png")} />
      <View style={style.informacoesLembrete}>
        <View style={style.containerTitulo}>
          <Text style={[Tipografia.card, style.textoTituloCor]}>{titulo}</Text>
        </View>

        {/*vai rederizar apenas se for do tipo amigo*/}

        {isFriend && (
          <View style={style.containerLegenda}>
            <Text style={[Tipografia.legenda, style.textoLegendaCor]}>
              de: {nomeAmigo}
            </Text>
          </View>
        )}
      </View>
      <Image source={require("./pencil.png")} />
    </View>
  );
}

export default CardLembrete;
