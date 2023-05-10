import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "../components/ModalProvider";
import styles from "./styles";

export default function ModalExample() {
  const [name, setName] = useState("");
  const modal = useModal();

  // Modal logic in contained in appModal context. Just use appModal.show( your_view )
  const handleShowModal = () => {
    if (name.length < 3) {
      modal.show(
        <>
          <Text>This is the Modal content</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
          <Text>
            This modal content is flexible and given by client component
            (ModalExample.jsx)
          </Text>
          <Button title="OK" onPress={() => modal.hide()} />
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Modal Example (src/examples/ModalExample.tsx)</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <Button title="Show Modal" onPress={handleShowModal} />
    </View>
  );
}
