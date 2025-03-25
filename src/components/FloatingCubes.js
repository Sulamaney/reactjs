import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// 🔲 Cube Component with Light Reflection
function Cube({ position }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#d4d4d4" roughness={0.3} metalness={0.9} />
    </mesh>
  );
}

// 💡 Moving Light Component
function MovingLight({ position, color, speed }) {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    lightRef.current.position.x = position[0] + Math.sin(t) * 2;
    lightRef.current.position.y = position[1] + Math.cos(t) * 2;
  });

  return <pointLight ref={lightRef} color={color} intensity={2} distance={6} />;
}

// ✨ Floating Cubes Scene
function FloatingCubes() {
  return (
    
    <Canvas style={{ width: "100vw", height: "100vh", background: "#0b0e16" }}>
      <ambientLight intensity={0.2} />
      
      {/* Moving lights with different speeds and colors */}
      <MovingLight position={[2, 3, 2]} color="orange" speed={0.5} />
      <MovingLight position={[-2, -2, 2]} color="#ff8800" speed={0.8} />
      <MovingLight position={[3, -3, 1]} color="yellow" speed={0.6} />

      {/* Floating Cubes with Wider Positioning */}
      <Cube position={[-1.5, 1.5, 0]} />
      <Cube position={[1.5, -1.5, 0]} />
      <Cube position={[0, 0, 0]} />
    </Canvas>
  );
}

export default FloatingCubes;
