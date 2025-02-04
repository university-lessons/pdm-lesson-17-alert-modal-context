import ModalProvider from "./src/components/ModalProvider";
import AppModal from "./src/components/ModalProvider";
import Home from "./src/pages/Home";
import Signup from "./src/pages/Signup";

export default function App() {
  // return <Home />;
  return (
    <ModalProvider>
      <Signup />
    </ModalProvider>
  );
}
