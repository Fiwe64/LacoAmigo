import { View, Text, Image } from "react-native";
import { style } from "./style";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../themes/colors";

function BottomMenu() {
  return (
    <View style={style.bottomMenuContainer}>
      <View style={style.iconContainer}>
        
        <View style={style.iconFrame}>
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

        
        <View style={style.addIconFrame}>
          <MaterialIcons name="add" size={32} color="#fff" />
        </View>

   
        <View style={style.iconFrame}>
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
      </View>
    </View>
  );
}

export default BottomMenu;
