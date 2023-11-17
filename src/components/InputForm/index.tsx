import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

interface InputFormProps {
  onSubmit: () => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log("Save data to DB: " + name);
    onSubmit();
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Name..." />

      <Button title="OK" onPress={handleSubmit} />
    </View>
  );
}
