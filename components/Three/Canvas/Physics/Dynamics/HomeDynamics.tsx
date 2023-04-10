/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CylinderCollider } from "../Utils/PhyshicsColliders";

type GLTFResult = GLTF & {
  nodes: {
    Circle010: THREE.Mesh;
    Circle010_1: THREE.Mesh;
    Circle010_2: THREE.Mesh;
    Circle017: THREE.Mesh;
    Circle017_1: THREE.Mesh;
    Circle017_2: THREE.Mesh;
    Circle095: THREE.Mesh;
    Circle095_1: THREE.Mesh;
    Circle095_2: THREE.Mesh;
  };
  materials: {
    cream_paper_kraft: THREE.MeshStandardMaterial;
    cream_yellow_light: THREE.MeshStandardMaterial;
    cream_dark: THREE.MeshStandardMaterial;
  };
};

export function HomeDynamics(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF(
    "/models/DynamicElements.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <CylinderCollider
        id='coffee_1'
        args={[1.15, 0.845, 3.15]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'
        position={[11.46, 1.57, 4.71]}>
        <group name='Coffee_1' position={[0, 0, 0]}>
          <mesh
            name='Circle010'
            castShadow
            receiveShadow
            geometry={nodes.Circle010.geometry}
            material={materials.cream_paper_kraft}
          />
          <mesh
            name='Circle010_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle010_1.geometry}
            material={materials.cream_yellow_light}
          />
          <mesh
            name='Circle010_2'
            castShadow
            receiveShadow
            geometry={nodes.Circle010_2.geometry}
            material={materials.cream_dark}
          />
        </group>
      </CylinderCollider>

      <CylinderCollider
        id='coffee_2'
        args={[1.15, 0.845, 3.15]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'
        position={[13.8, 1.57, 6.48]}>
        <group name='coffee_2' position={[0, 0, 0]}>
          <mesh
            name='Circle017'
            castShadow
            receiveShadow
            geometry={nodes.Circle017.geometry}
            material={materials.cream_paper_kraft}
          />
          <mesh
            name='Circle017_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle017_1.geometry}
            material={materials.cream_yellow_light}
          />
          <mesh
            name='Circle017_2'
            castShadow
            receiveShadow
            geometry={nodes.Circle017_2.geometry}
            material={materials.cream_dark}
          />
        </group>
      </CylinderCollider>

      <CylinderCollider
        id='coffee_3'
        args={[1.15, 0.845, 3.15]}
        position={[14.35, 0.99, 3.49]}
        rotation={[1.48, 0.12, -0.96]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'>
        <group name='coffee_3'>
          <mesh
            name='Circle095'
            castShadow
            receiveShadow
            geometry={nodes.Circle095.geometry}
            material={materials.cream_paper_kraft}
          />
          <mesh
            name='Circle095_1'
            castShadow
            receiveShadow
            geometry={nodes.Circle095_1.geometry}
            material={materials.cream_yellow_light}
          />
          <mesh
            name='Circle095_2'
            castShadow
            receiveShadow
            geometry={nodes.Circle095_2.geometry}
            material={materials.cream_dark}
          />
        </group>
      </CylinderCollider>
    </group>
  );
}

useGLTF.preload("/models/DynamicElements.glb");