/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 model.gltf 
*/

import React from "react";
import {
  useGLTF,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model.gltf");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={4000}
        fov={25.115}
        position={[1.826, 33.849, 55.605]}
        rotation={[-0.003, 0, 0]}
      />
      <OrthographicCamera
        makeDefault={false}
        far={4000}
        position={[0, 1000.1, 0]}
        rotation={[-0.027, 0, 0]}
      />
      <OrthographicCamera
        makeDefault={false}
        far={4000}
        position={[0, 0, 1000.1]}
      />
      <OrthographicCamera
        makeDefault={false}
        far={4000}
        position={[1000.1, 0, 0]}
        rotation={[0, 0.027, 0]}
      />
    </group>
  );
}

useGLTF.preload("/model.gltf");
