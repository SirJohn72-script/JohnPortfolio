/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane122: THREE.Mesh;
    Plane123: THREE.Mesh;
    Plane124: THREE.Mesh;
    Plane230: THREE.Mesh;
    Plane141: THREE.Mesh;
    Plane142: THREE.Mesh;
    Plane143: THREE.Mesh;
    Circle033: THREE.Mesh;
    Circle034: THREE.Mesh;
    Plane159: THREE.Mesh;
    Plane231: THREE.Mesh;
  };
  materials: {
    cream_dark: THREE.MeshStandardMaterial;
    cream_dark_lighter: THREE.MeshStandardMaterial;
    cream_naranja_intenso: THREE.MeshStandardMaterial;
    postips: THREE.MeshStandardMaterial;
    Game_Ports: THREE.MeshStandardMaterial;
  };
};

export function ProjectSecction(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF(
    "/models/ProjectsSecction.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        name='Plane122'
        castShadow
        receiveShadow
        geometry={nodes.Plane122.geometry}
        material={materials.cream_dark}
        position={[27.37, 5.12, -9.23]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.2, 2.2, 3.08]}
      />
      <mesh
        name='Plane123'
        castShadow
        receiveShadow
        geometry={nodes.Plane123.geometry}
        material={materials.cream_dark}
        position={[21.12, 4.12, -7.67]}
        rotation={[Math.PI / 2, 0, -0.48]}
        scale={[2.2, 2.2, 3.08]}
      />
      <mesh
        name='Plane124'
        castShadow
        receiveShadow
        geometry={nodes.Plane124.geometry}
        material={materials.cream_dark}
        position={[33.64, 4.14, -7.44]}
        rotation={[Math.PI / 2, 0, 0.66]}
        scale={[2.2, 2.2, 3.08]}
      />
      <mesh
        name='Plane230'
        castShadow
        receiveShadow
        geometry={nodes.Plane230.geometry}
        material={materials.cream_dark}
        position={[39.66, 3.06, -5.81]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.2, 2.2, 3.08]}
      />
      <mesh
        name='Plane141'
        castShadow
        receiveShadow
        geometry={nodes.Plane141.geometry}
        material={materials.cream_dark}
        position={[28.48, 0, 6]}
        scale={[1.46, 1.98, 1.46]}
      />
      <mesh
        name='Plane142'
        castShadow
        receiveShadow
        geometry={nodes.Plane142.geometry}
        material={materials.cream_dark}
        position={[28.48, 1.34, 5.96]}
        scale={[1.43, 1.98, 1.43]}
      />
      <mesh
        name='Plane143'
        castShadow
        receiveShadow
        geometry={nodes.Plane143.geometry}
        material={materials.cream_dark_lighter}
        position={[28.48, 2.55, 5.96]}
        scale={[1.43, 1.98, 1.43]}
      />
      <mesh
        name='Circle033'
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials.cream_naranja_intenso}
        position={[27.31, 1.15, 7.1]}
        scale={0.21}
      />
      <mesh
        name='Circle034'
        castShadow
        receiveShadow
        geometry={nodes.Circle034.geometry}
        material={materials.cream_dark_lighter}
        position={[27.31, 1.15, 7.1]}
        scale={0.21}
      />
      <mesh
        name='Plane159'
        castShadow
        receiveShadow
        geometry={nodes.Plane159.geometry}
        material={materials.postips}
        position={[86.5, 1.72, -6.2]}
        rotation={[0.14, 0.09, 0.02]}
      />
      <mesh
        name='Plane231'
        castShadow
        receiveShadow
        geometry={nodes.Plane231.geometry}
        material={materials.Game_Ports}
      />
    </group>
  );
}

useGLTF.preload("/models/ProjectsSecction.glb");
