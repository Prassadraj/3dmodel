import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import Model from "./Model"; // Import Model component
import "./App.css";

function App() {
  const cameraRef = useRef();

  return (
    <>
      <Canvas style={{ cursor: "pointer", height: "100vh", width: "100%" }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[40, 10, 5]} intensity={1} />

        {/* Load 3D Model */}
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>

        {/* Camera and OrbitControls */}
        <PerspectiveCamera
          makeDefault={true}
          ref={cameraRef} // Use ref for controlling the camera
          far={4000}
          fov={95.115}
          position={[8.5, 0, 0]} // Adjusted position
          rotation={[-0.02, 0.1, 0]} // Adjusted rotation
        />
        <OrbitControls camera={cameraRef.current} enableZoom={true} />
      </Canvas>
      <p
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 99999,
          color: "white",
          fontWeight: "600",
          padding: "1px 10px",
        }}
      >
        Drag And move to explore.
      </p>
    </>
  );
}

export default App;
