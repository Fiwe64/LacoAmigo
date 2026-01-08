import { View, Text } from "react-native";
import React from "react";
import CardLembrete from "../../components/lembrete/index";
import TopMenu from "../../components/TopMenu";
import BottomMenu from "../../components/BottomMenu";
import style from "./style";

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TopMenu/>
      </View>
      <View style={style.body}></View>
      <View style={style.footer}>
        <BottomMenu/>
      </View>
    </View>
  );
};

export default HomeScreen;
