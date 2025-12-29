import { View, Text, Image } from "react-native";
import { style } from "./style";
import React from "react";

function BottomMenu() {
  return (

    
    <View style={style.bottomMenuContainer}>
      <View style={style.iconContainer}>
        <View style={style.iconFrame}>
          <Image source={require("./icons/Vector.png")}></Image>
        </View>
        <View style={style.addIconFrame}>
          <Image source={require("./icons/add.png")}></Image>
        </View>
        <View style={style.iconFrame}>
          <Image source={require("./icons/Pomodoro.png")}></Image>
        </View>
      </View>

      <View style={style.textContainer}>
        <Text style={style.colorText}>Lembretes</Text>
        <Text style={style.colorText}>Adicionar</Text>
        <Text style={style.colorText}>Pomodoro</Text>
      </View>
    </View>
  );
}

export default BottomMenu;
