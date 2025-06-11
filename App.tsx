import Modal from "./src/components/Modal/Modal";
import AlertExample from "./src/examples/AlertExample";
import ModalExample from "./src/examples/ModalExample";

export default function App() {
  return (
    <Modal.Provider>
      <AlertExample />
      <ModalExample />
    </Modal.Provider>
  );
}
