import { View, Text, FlatList } from "react-native";
import React from "react";
import Lembrete from "../../components/lembrete/index";
import style from "./style";
import { useLembrete } from "../../contexts/ReminderContext";

const HomeScreen = () => {
  const { lembretes } = useLembrete();
  return (
    <View style={style.container}>
      <View style={style.body}>
        <FlatList
          data={lembretes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Lembrete
              titulo={item.title} 
              descricao={item.description} 
              date={item.date ?? ""} 
              urgency={
                item.flag === "urgent" ? 3 : item.flag === "important" ? 2 : 1
              } 
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
