import { View, Text, StyleSheet, Button, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import ModalContent from "../components/ModalContent";

export default function Signup() {
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const handleSignup = () => {
    if (name.length < 3) console.log("O nome deve ter 3 caracteres ou mais!");
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContent />
      </Modal>

      <Text>Signup</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Nome" />
      <Button title="Cadastrar-se" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
