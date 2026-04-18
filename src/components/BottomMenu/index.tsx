import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { style } from "./style";
import React, { useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../themes/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLembrete } from "../../contexts/ReminderContext";

function BottomMenu({ state, navigation }: BottomTabBarProps) {
  const isHome = state.index === 0; // diz onde estamos na navegação
  const insets = useSafeAreaInsets(); // isso aqui é para a tela ficar numa area segura no celular
  const { openModal } = useLembrete();

  return (
    <View style={style.bottomMenuContainer}>
      <View style={[style.iconContainer, { paddingBottom: insets.bottom }]}>
        {/*Botão de Lembretes*/}
        <TouchableOpacity
          style={style.iconFrame}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={[
              style.selectedIconBackground,
              { backgroundColor: !isHome ? colors.primary : colors.secundary },
            ]}
          >
            <MaterialIcons name="list" size={32} color="#fff" />

            <Text style={style.colorText}>Lembretes</Text>
          </View>
        </TouchableOpacity>
        {/** Botão de Adicionar */}
        <TouchableOpacity
          style={style.addIconFrame}
          onPress={openModal}
        >
          <MaterialIcons name="add" size={32} color="#fff" />
        </TouchableOpacity>
        {/** Botão de Pomodoro */}

        <TouchableOpacity
          style={style.iconFrame}
          onPress={() => navigation.navigate("Pomodoro")}
        >
          <View
            style={[
              style.selectedIconBackground,
              { backgroundColor: isHome ? colors.primary : colors.secundary },
            ]}
          >
            <MaterialIcons name="alarm" size={32} color="#fff" />

            <Text style={style.colorText}>Pomodoro</Text>
          </View>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}

export default BottomMenu;
