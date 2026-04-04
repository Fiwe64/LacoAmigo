import { View, Text, Image, TouchableOpacity, Touchable } from "react-native";
import React from "react";
import style from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";


const TopMenu = ({state, navigation}: BottomTabBarProps) => {
  
  if (!state) return null;
  
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
        <TouchableOpacity style={style.tabButtonActive} onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialIcons name="person" size={20} color="#fff" />
          <Text style={state.index === 0 ? style.tabTextActive : {}}>Meus Lembretes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabButtonInactive} onPress={() => navigation.navigate("FriendScreen")}>
          <MaterialIcons name="person" size={20} color="#1E1E1E" />
          <Text style={state.index === 1 ? style.tabTextActive : {}}>Amigos</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default TopMenu;
