import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "../components/Box";

const AnimateContainer = () => {
  return (
    <Canvas className="canvas-container drop-in-2">
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.4}
      />
      <ambientLight 
        intensity={0.5}
      />
      <directionalLight
        position={[-2, 5, 2]}
        intensity={1}
      />
      <Box />
    </Canvas>
  )
};

export default AnimateContainer;
