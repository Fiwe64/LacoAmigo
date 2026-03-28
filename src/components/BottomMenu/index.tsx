import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../themes/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

function BottomMenu({ state, navigation }: BottomTabBarProps) {
  const isHome = state.index === 0;

  return (
    <View style={style.bottomMenuContainer}>
      <View style={style.iconContainer}>
        {/*Botão de Lembretes*/}
        <TouchableOpacity
          style={style.iconFrame}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={[
              style.selectedIconBackground,
              { backgroundColor: isHome ? colors.primary : colors.secundary },
            ]}
          >
            <View
              style={[
                style.selectedIconBackground,
                { backgroundColor: colors.secundary },
              ]}
            >
              <MaterialIcons name="list" size={32} color="#fff" />
            </View>
            <Text style={style.colorText}>Lembretes</Text>
          </View>
        </TouchableOpacity>
        {/** Botão de Adicionar */}
        <View style={style.addIconFrame}>
          <MaterialIcons name="add" size={32} color="#fff" />
        </View>
        {/** Botão de Pomodoro */}

        <TouchableOpacity style={style.iconFrame} onPress={() => navigation.navigate("Pomodoro")}>
          <View style={[style.selectedIconBackground, { backgroundColor: !isHome ? colors.primary : colors.secundary }]}>
            <View
              style={[
                style.selectedIconBackground,
                { backgroundColor: colors.primary },
              ]}
            >
              <MaterialIcons name="alarm" size={32} color="#fff" />
            </View>
            <Text style={style.colorText}>Pomodoro</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomMenu;
