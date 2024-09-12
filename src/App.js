import "./index.css";
import { OrbitControls, Environment } from "@react-three/drei";
import Text from "./components/Text";

function App() {
  return (
    <>
      <OrbitControls />
      <Environment preset="city" />
      <directionalLight position={[1, 2, 5]} />
      <ambientLight intensity={1} />
      <Text />
    </>
  );
}

export default App;
