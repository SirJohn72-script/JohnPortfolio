/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane132: THREE.Mesh;
    Plane133: THREE.Mesh;
    Circle023: THREE.Mesh;
    Circle024: THREE.Mesh;
    Plane140: THREE.Mesh;
    Plane140_1: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Plane134: THREE.Mesh;
    Circle025: THREE.Mesh;
    Contact: THREE.Mesh;
    Circle035: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Catenary008: THREE.Mesh;
    Plane149: THREE.Mesh;
    Plane149_1: THREE.Mesh;
    Text008: THREE.Mesh;
    Circle051: THREE.Mesh;
    Circle051_1: THREE.Mesh;
    Plane135: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Plane119: THREE.Mesh;
  };
  materials: {
    cream_dark: THREE.MeshStandardMaterial;
    cream_verde_azulado_oscuro: THREE.MeshStandardMaterial;
    cream_green: THREE.MeshStandardMaterial;
    cream_grey_metallic_copper: THREE.MeshStandardMaterial;
    cream_grey_metallic_copper_light: THREE.MeshStandardMaterial;
    cream_grey_metallic: THREE.MeshStandardMaterial;
    cream_dark_wood: THREE.MeshStandardMaterial;
    cream_yellow_light: THREE.MeshStandardMaterial;
    cream_red: THREE.MeshStandardMaterial;
    cream_dark_blue: THREE.MeshStandardMaterial;
    postips: THREE.MeshStandardMaterial;
  };
};

export function ContactSecction(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF(
    "/models/ContactSecction.glb"
  ) as GLTFResult;

  const lightDirecRef = React.useRef<any>();
  // const shadowCameraRef = React.useRef<any>();
  const planeTarget = React.useRef<any>();
  // useHelper(lightDirecRef, THREE.SpotLightHelper);
  // useHelper(shadowCameraRef, THREE.CameraHelper);

  return (
    <group {...props} dispose={null}>
      <mesh
        name='Plane132'
        castShadow
        receiveShadow
        geometry={nodes.Plane132.geometry}
        material={materials.cream_dark}
        position={[82.98, 0.25, 1.06]}
        rotation={[0.12, -0.18, 0.02]}
        scale={1.69}
      />
      <mesh
        name='Plane133'
        castShadow
        receiveShadow
        geometry={nodes.Plane133.geometry}
        material={materials.cream_dark}
        position={[82.98, 0.25, 1.06]}
        rotation={[0.12, -0.18, 0.02]}
        scale={1.69}
      />
      <mesh
        name='Circle023'
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials.cream_dark}
        position={[82.49, 0.57, 0.89]}
        rotation={[0.12, -0.18, 0.02]}
        scale={0.12}
      />
      <mesh
        name='Circle024'
        castShadow
        receiveShadow
        geometry={nodes.Circle024.geometry}
        material={materials.cream_dark}
        position={[82.19, 0.42, 2.12]}
        rotation={[0.12, -0.18, 0.02]}
        scale={[0.09, 0.09, 0.11]}
      />
      <group
        name='Plane131'
        position={[83.16, 0.66, 0.21]}
        rotation={[0.12, -0.18, 0.02]}
        scale={1.69}>
        <mesh
          name='Plane140'
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials.cream_dark}
        />
        <mesh
          name='Plane140_1'
          castShadow
          receiveShadow
          geometry={nodes.Plane140_1.geometry}
          material={materials.cream_verde_azulado_oscuro}
        />
      </group>
      <group
        name='Cylinder'
        position={[83.18, 0.44, 0.15]}
        rotation={[0.4, -0.16, 0.07]}
        scale={1.69}>
        <mesh
          name='Cylinder_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.cream_dark}
        />
        <mesh
          name='Cylinder_2'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.cream_dark}
        />
      </group>
      <mesh
        name='Plane134'
        castShadow
        receiveShadow
        geometry={nodes.Plane134.geometry}
        material={materials.cream_dark}
        position={[83.41, 1.15, -1.18]}
        rotation={[0.4, -0.16, 0.07]}
        scale={[0.7, 0.22, 0.22]}
      />
      <mesh
        name='Circle025'
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials.cream_dark}
        position={[84.37, 0.59, -0.73]}
        rotation={[1.78, 0.04, 0.31]}
        scale={0.09}
      />
      <mesh
        name='Contact'
        castShadow
        receiveShadow
        geometry={nodes.Contact.geometry}
        material={materials.cream_green}
        position={[83.41, 0.39, 2.71]}
        rotation={[0.12, -0.18, 0.02]}
        scale={[0.09, 0.09, 0.11]}
      />
      <mesh
        ref={planeTarget}
        name='Circle035'
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials.cream_dark}
        position={[85.53, 2.7, -8.72]}
        scale={4.74}
      />
      <group
        name='Cylinder001'
        position={[85.53, 0.66, -6.32]}>
        <mesh
          name='Cylinder001_1'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.cream_grey_metallic_copper}
        />

        <mesh
          name='Cylinder001_2'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={
            materials.cream_grey_metallic_copper_light
          }
        />
      </group>

      <mesh
        name='Catenary008'
        castShadow
        receiveShadow
        geometry={nodes.Catenary008.geometry}
        material={materials.cream_grey_metallic}
        position={[85.53, 5.7, -6.61]}
      />
      <group
        name='Plane147'
        position={[88.08, 0.67, 0.31]}
        scale={[1.09, 1, 1]}>
        <mesh
          name='Plane149'
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials.cream_dark_wood}
        />
        <mesh
          name='Plane149_1'
          castShadow
          receiveShadow
          geometry={nodes.Plane149_1.geometry}
          material={materials.cream_dark}
        />
      </group>
      <mesh
        name='Text008'
        castShadow
        receiveShadow
        geometry={nodes.Text008.geometry}
        material={materials.cream_yellow_light}
        position={[88.08, 0.66, 0.81]}
        rotation={[0.87, 0, 0]}
      />
      <group
        name='Circle050'
        position={[91.61, -0.03, -4.05]}
        scale={1.28}>
        <mesh
          name='Circle051'
          castShadow
          receiveShadow
          geometry={nodes.Circle051.geometry}
          material={materials.cream_red}
        />
        <mesh
          name='Circle051_1'
          castShadow
          receiveShadow
          geometry={nodes.Circle051_1.geometry}
          material={materials.cream_dark_wood}
        />
      </group>
      <mesh
        name='Plane135'
        castShadow
        receiveShadow
        geometry={nodes.Plane135.geometry}
        material={materials.cream_green}
        position={[91.65, 0.18, -4.05]}
        rotation={[Math.PI, -0.81, Math.PI]}
        scale={0.45}
      />
      <mesh
        name='Cube'
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[85.53, 8.7, -4.5]}
        scale={0.3}
      />
      <group
        name='LinkedIn'
        position={[85.23, 0.02, 4.79]}
        scale={0.47}>
        <mesh
          name='Cube020'
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.cream_dark_blue}
        />
        <mesh
          name='Cube020_1'
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials.cream_yellow_light}
        />
      </group>
      <group
        name='GitHub'
        position={[86.37, 0.02, 4.79]}
        scale={0.47}>
        <mesh
          name='Cube021'
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.cream_dark}
        />
        <mesh
          name='Cube021_1'
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials.cream_yellow_light}
        />
      </group>
      <mesh
        name='Plane119'
        castShadow
        receiveShadow
        geometry={nodes.Plane119.geometry}
        material={materials.postips}
        position={[86.5, 1.72, -6.2]}
        rotation={[0.14, 0.09, 0.02]}
      />
    </group>
  );
}

useGLTF.preload("/models/ContactSecction.glb");