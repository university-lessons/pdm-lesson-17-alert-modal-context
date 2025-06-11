import { Button, Text, View } from "react-native";
import InputForm from "../components/InputForm";
import { useModal } from "../components/Modal/ModalProvider";
import styles from "./styles";
import Modal from "../components/Modal/Modal";

export default function ModalExample() {
  const modal = useModal();

  // Modal logic in contained in appModal context. Just use appModal.show( your_view )
  const handleShowModal = () => {
    modal.show(
      <Modal>
        <Modal.Header title="Modal title" withCloseButton />

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

        <Modal.Footer
          primaryAction={{
            title: "OK",
            onPress: () => {
              console.log("Primary Action!");
            },
          }}
          secondaryAction={{
            title: "Cancel",
            onPress: () => {
              console.log("Secondary Action!");
            },
          }}
        />
      </Modal>
    );
  };

  const handleInputModal = () => {
    modal.show(
      <Modal>
        <Modal.Header title="Input" withCloseButton />

        <Text>Please enter your name:</Text>
        <InputForm
          onSubmit={(text) => {
            console.log("Input value (on parent component):", text);
            modal.hide();
          }}
        />
      </Modal>
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
