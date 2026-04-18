import { Text, View, TextInput, Modal, TouchableOpacity } from "react-native";
import { style } from "./style";
import { EmergencyCard } from "./emergencyCard";
import { useState } from "react";
import { useLembrete } from "../../contexts/ReminderContext";

export function ModalTarefas() {
  const { isModalOpen, closeModal, criarLembrete } = useLembrete();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState<"common" | "important" | "urgent">("common");

  const handleSave = () => {

    if (!title.trim() || !description.trim()) {
      alert("Por favor, preencha o título e a descrição.");
      return;
    }
    criarLembrete({ title, description, flag });
    setTitle("");
    setDescription("");
    setFlag("common");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={closeModal}
    >
      <View style={style.container}>
        <View style={style.buttonsBox}>
          <Text>Salvar Lembrete!</Text>

          <View style={style.buttonsBox}>
            <Text>Titulo</Text>
            <TextInput
              style={style.textInput}
              value={title}
              onChangeText={setTitle}
              placeholder="Digite o título"
            />
            <Text>Descrição</Text>
            <TextInput
              style={style.textInput}
              value={description}
              onChangeText={setDescription}
              placeholder="Digite a descrição"
            />
            <Text>Emergência</Text>
            <View style={{ flexDirection: "row", gap: 20, width: "100%" }}>
              <TouchableOpacity onPress={() => setFlag("common")}>
                <EmergencyCard title="Comum" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setFlag("important")}>
                <EmergencyCard title="Importante" emergency={2} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setFlag("urgent")}>
                <EmergencyCard title="URGENTE!" emergency={3} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSave} style={style.saveButton}>
              <Text>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
