import { Canvas } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import Model from "./Model"
import KTX2Environment from "./KTX2Environment"

const ThreeScene = () => (
  <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
    <ambientLight intensity={0.2} />
    <directionalLight intensity={1} position={[5, 10, 5]} />
    <Suspense
      fallback={
        <Html>
          <div className="bg-red-700 text-white p-2 rounded">Loading...</div>
        </Html>
      }
    >
      <KTX2Environment />
      <Model />
    </Suspense>
    <OrbitControls
      maxPolarAngle={Math.PI / 2.2}
      minPolarAngle={Math.PI / 2.5}
      maxAzimuthAngle={Math.PI / 6}
      minAzimuthAngle={-Math.PI / 6}
      enableZoom={false}
    />
  </Canvas>
)

export default ThreeScene