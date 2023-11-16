import { View, Text, Button, Alert, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";

export default function AlertExample() {
  const handleInfo = () => {
    Alert.alert("Info", "Data saved!", [
      {
        text: "OK",
      },
    ]);
  };

  const handleConfirm = () => {
    Alert.alert("Confirmation", "Are you sure to override data? ", [
      {
        text: "Cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          console.log("YES Pressed");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Alert Examples (src/examples/AlertExample.tsx)</Text>
        <Text>(check also console logs)</Text>
      </View>
      <Button title="Show Info Alert" onPress={handleInfo} />
      <Button title="Show Confirm Alert" onPress={handleConfirm} />
    </View>
  );
}
