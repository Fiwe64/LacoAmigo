import { View, Text, Image, TouchableOpacity, Touchable } from "react-native";
import React from "react";
import style from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const TopMenu = ({state, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  //NAO TIRA ESSE IF DE JEITO, ELE É IMPORTANTE PARA EVITAR ERROS DE NAVEGAÇÃO QUANDO O COMPONENTE FOR RENDERIZADO ANTES DO ESTADO ESTAR PRONTO
  if (!state) return null;
  
  return (
    <View style={[style.container, { paddingTop: insets.top }]}>
      {/* 1. Parte de Cima: Título e Menu Icone */}
      <View style={style.header}>
        <Text style={style.headerTitle}>Não se Esqueça</Text>
        <View style={style.menuButton}>
          {/*<Image source={require("./icons/menu.png")}></Image>*/}
          <MaterialIcons name="menu" size={32} color="#333" />
        </View>
      </View>

      <View style={style.tabsContainer}>
        <TouchableOpacity style={state.index===0 ? style.tabButtonActive : style.tabButtonInactive} onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialIcons name="person" size={20} color="#fff" />
          <Text style={state.index === 0 ? style.tabTextActive : {}}>Meus Lembretes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={state.index===1 ? style.tabButtonActive : style.tabButtonInactive} onPress={() => navigation.navigate("FriendScreen")}>
          <MaterialIcons name="person" size={20} color="#1E1E1E" />
          <Text style={state.index === 1 ? style.tabTextActive : {}}>Amigos</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default TopMenu;
