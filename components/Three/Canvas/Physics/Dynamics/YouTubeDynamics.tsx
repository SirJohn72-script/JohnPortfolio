import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CuboidColliderDynamic } from "../Utils/PhyshicsColliders";

type GLTFResult = GLTF & {
  nodes: {
    Sponge: THREE.Mesh;
  };
  materials: {
    cream_dark_blue: THREE.MeshStandardMaterial;
  };
};

export function YouTubeDynamics(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF(
    "/models/YouTubeDynamics.glb"
  ) as GLTFResult;
  return (
    <CuboidColliderDynamic
      id='youtube'
      args={[2, 2, 2]}
      scale={[1, 1, 1]}
      position={[77.15, 0.99, 9.56]}
      rotation={[0, 0.38, 0]}
      mass={1}
      type='Dynamic'>
      <group {...props} dispose={null}>
        <mesh
          name='Sponge'
          castShadow
          receiveShadow
          geometry={nodes.Sponge.geometry}
          material={materials.cream_dark_blue}
        />
      </group>
    </CuboidColliderDynamic>
  );
}

useGLTF.preload("/models/YouTubeDynamics.glb");