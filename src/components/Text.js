import React from "react";
import { Text3D, Center } from "@react-three/drei";
import font from "../assets/Inter_Bold.json";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Text = () => {
  const textRef = useRef();

  useFrame((state, delta) => {
    textRef.current.rotation.x += delta * 0.2;
    // textRef.current.rotation.y += delta * 0.2;
    textRef.current.rotation.z += delta * 0.2;
  }, []);
  return (
    <>
      <Center>
        <Text3D font={font} ref={textRef}>
          hello /{/* <meshStandardMaterial wireframe /> */}
          <meshStandardMaterial
            color="purple"
            roughness={0.176}
            metalness={0.742}
          />
        </Text3D>
      </Center>
    </>
  );
};

export default Text;
