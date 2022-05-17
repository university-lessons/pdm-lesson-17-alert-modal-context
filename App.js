import AppModal from "./src/components/AppModal";
import Home from "./src/pages/Home";
import Signup from "./src/pages/Signup";

export default function App() {
  // return <Home />;

  return (
    <AppModal>
      <Signup />
    </AppModal>
  );
}
