import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { AmbientLight } from "three";
import Christmas from "./component/Christmas";

function App() {
  const cameraRef = useRef();

  return (
    <>
      <Canvas
        style={{
          cursor: "pointer",
          height: "100vh",
          paddingTop: "80px",

          width: "100%",
          display: "block", // Ensures canvas fills the screen without extra space
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} />

        {/* Load 3D Model */}
        <Suspense fallback={null}>
          <Christmas />
          <Environment preset="sunset" />
        </Suspense>

        {/* Adjusted Camera settings for proper zoom */}
        <PerspectiveCamera
          makeDefault
          position={[104, 190, 310]}
          fov={75}
          ref={cameraRef}
        />

        {/* Orbit Controls with distance limits */}
        <OrbitControls minDistance={200} maxDistance={400} />
      </Canvas>

      <p
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 99999,
          color: "black",
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
