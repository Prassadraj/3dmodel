import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import Model from "./Model";
import "./App.css";
function App() {
  return (
    <>
      <Canvas style={{ cursor: "pointer", height: "100vh", width: "100%" }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Load 3D Model */}
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </>
  );
}

export default App;
