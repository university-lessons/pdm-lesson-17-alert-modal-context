import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface InputFormProps {
  onSubmit: (text: string) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onSubmit(name);
  };

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name..."
        style={styles.input}
      />

      <View style={styles.footer}>
        <Button title="OK" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  footer: {
    marginTop: 8,
    gap: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
