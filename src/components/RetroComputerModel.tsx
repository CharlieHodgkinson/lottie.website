import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      // @ts-ignore
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={0.05}
        position={[0, -1.2, 1]}
        rotation={[Math.PI / 7, -Math.PI / 10, 0]}
      />
    </group>
  );
};

export const RetroComputerModel = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0,
        delay: 0.9,
        stiffness: 200,
      }}
      style={{ width: "100%", height: "700px" }}
    >
      <Canvas
        // style={{ height: "500px", width: "700px" }}
        camera={{ position: [0, 0, 15], fov: 30 }}
      >
        <ambientLight intensity={3} />
        <Model url="/models/scene.gltf" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};
