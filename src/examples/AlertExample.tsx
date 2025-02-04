import { View, Text, Button, Alert, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";

export default function AlertExample() {
  const handleAlert = () => {
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
        <Text>Alert Example (src/examples/AlertExample.tsx)</Text>
        <Text>(check also console logs)</Text>
      </View>
      <Button title="Show Alert" onPress={handleAlert} />
    </View>
  );
}
