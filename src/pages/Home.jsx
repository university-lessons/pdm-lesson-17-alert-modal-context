import { View, Text, Button, Alert, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  const handleOk = () => {
    console.log("OK Pressed");
  };

  const handleAlert = () => {
    Alert.alert("Confirmação", "Deseja Sobrescrever os Dados? ", [
      {
        text: "Cancelar",
      },
      { text: "Sim", onPress: handleOk },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="Atualizar Profile (Alert)" onPress={handleAlert} />
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
