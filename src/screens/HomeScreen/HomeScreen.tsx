import { View, Text } from "react-native";
import React from "react";
import Lembrete from "../../components/lembrete/index";

import BottomMenu from "../../components/BottomMenu";
import style from "./style";

const HomeScreen = () => {
  return (
    <View style={style.container}>
      {/* <View style={style.header}>
        <TopMenu/>
      </View> */}
      <View style={style.body}>
        <Lembrete titulo="Teste" descricao="Testeeeee" urgency={1} date="hoje"/>
        <Lembrete titulo="Teste" descricao="Testeeeee" urgency={1} date="hoje"/>
      </View>
      {/* <View style={style.footer}>
        <BottomMenu/>
      </View> */}
    </View>
  );
};

export default HomeScreen;
