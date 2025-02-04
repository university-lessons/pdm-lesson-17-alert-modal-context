import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "../components/ModalProvider";

export default function Signup() {
  const [name, setName] = useState("");
  const modal = useModal();

  // Modal logic in contained in appModal context. Just use appModal.show( your_view )
  const handleSignup = () => {
    if (name.length < 3) {
      modal.show(
        <>
          <Text>Error Message</Text>
          <Text>Name must have 3 or more characters length!</Text>
          <Text>
            This modal content is flexible and given by client component
            (Signup.jsx)
          </Text>
          <Button title="OK" onPress={() => modal.hide()} />
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <Button title="Signup" onPress={handleSignup} />
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
