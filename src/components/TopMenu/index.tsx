import { View, Text, Image } from "react-native";
import React from "react";
import style from "./style";
import { MaterialIcons } from "@expo/vector-icons";

const TopMenu = () => {
  return (
    <View style={style.container}>
      {/* 1. Parte de Cima: Título e Menu Icone */}
      <View style={style.header}>
        <Text style={style.headerTitle}>Não se Esqueça</Text>
        <View style={style.menuButton}>
          {/*<Image source={require("./icons/menu.png")}></Image>*/}
          <MaterialIcons name="menu" size={32} color="#333" />
        </View>
      </View>

      <View style={style.tabsContainer}>
        <View style={style.tabButtonActive}>
          <MaterialIcons name="person" size={20} color="#fff" />
          <Text style={style.tabTextActive}>Meus Lembretes</Text>
        </View>
        <View style={style.tabButtonInactive}>
          <MaterialIcons name="person" size={20} color="#1E1E1E" />
          <Text >Meus Lembretes</Text>
        </View>
      </View>
      
    </View>
  );
};

export default TopMenu;
