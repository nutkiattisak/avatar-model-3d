// App.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import bg from "./bg.png";

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <img
        src={bg}
        alt={"sdsd"}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover"
        }}
      />

      <div
        style={{
          position: "fixed",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 0,
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} />
          </Suspense>
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </div>
  );
}
