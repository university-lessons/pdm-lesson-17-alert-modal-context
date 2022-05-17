import { View, Text, StyleSheet, Button, TextInput, Modal } from "react-native";
import React, { useState, useContext } from "react";
import { ModalContext } from "../components/AppModal";

export default function Signup() {
  const [name, setName] = useState("");
  const appModal = useContext(ModalContext);

  // Modal logic in contained in appModal context. Just use appModal.show( your_view )
  const handleSignup = () => {
    if (name.length < 3) {
      appModal.show(
        <>
          <Text>Error Message</Text>
          <Text>Name must have 3 or more characters length!</Text>
          <Text>
            This modal content is flexible and given by client component
            (Signup.jsx)
          </Text>
          <Button title="OK" onPress={() => appModal.hide()} />
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
