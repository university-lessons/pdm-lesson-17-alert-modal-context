import ModalProvider from "./src/components/ModalProvider";

import AlertExample from "./src/examples/AlertExample";
import ModalExample from "./src/examples/ModalExample";

export default function App() {
  return (
    <ModalProvider>
      <AlertExample />
      <ModalExample />
    </ModalProvider>
  );
}
