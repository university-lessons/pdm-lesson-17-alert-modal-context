import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function ModalContent() {
  const handleOk = () => {
    console.log("close modal!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>ModalContent</Text>
        <Text>ModalContent</Text>

        <Button title="OK" onPress={handleOk} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0.5,0.5,0.5,0.5)",
  },
  content: {
    width: "80%",
    height: "80%",
    margin: 8,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
