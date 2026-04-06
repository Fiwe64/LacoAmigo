  import { View, Text } from "react-native";
  import React from "react";
  import Lembrete from "../../components/lembrete/index";
  import TopMenu from "../../components/TopMenu";

  import style from "./style";

  const FriendScreen = () => {
    return (
      <View style={style.container}>
        {/* <View style={style.header}>
          <TopMenu/>
        </View> */}
        <View style={style.body}>
          <Lembrete titulo="Teste" descricao="Amiga Thamyres" nomeAmigo="Thamy" urgency={2} date="hoje"/>
          <Lembrete titulo="Teste" descricao="Amiga Thamyres" nomeAmigo="Thamy" urgency={1} date="hoje"/>
        </View>
        {/* <View style={style.footer}>
          <BottomMenu/>
        </View> */}
      </View>
    );
  };

  export default FriendScreen;
