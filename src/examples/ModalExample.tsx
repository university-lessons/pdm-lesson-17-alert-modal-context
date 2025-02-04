import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useModal } from "../components/ModalProvider";
import styles from "./styles";
import InputForm from "../components/InputForm";

export default function ModalExample() {
  const modal = useModal();

  // Modal logic in contained in appModal context. Just use appModal.show( your_view )
  const handleShowModal = () => {
    modal.show(
      <>
        <Text>This is the Modal content</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Text>
        <Text>
          This modal content is flexible and given by client component
          (ModalExample.jsx)
        </Text>
        <Button title="OK" onPress={() => modal.hide()} />
      </>
    );
  };

  const handleInputModal = () => {
    modal.show(
      <>
        <Text>Insert your name:</Text>
        <InputForm onSubmit={() => modal.hide()} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Modal Example (src/examples/ModalExample.tsx)</Text>
      <Button title="Show Modal" onPress={handleShowModal} />
      <Button title="Show Input Modal" onPress={handleInputModal} />
    </View>
  );
}
