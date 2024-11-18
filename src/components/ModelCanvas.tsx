import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { useControls } from "leva";

interface ModelCanvasProps {
  model: JSX.Element | null;
  title: string;
  description: string;
  backgroundColor: string;
  titleColor?: string;
  descriptionColor?: string;
  width?: string;
  height?: string;
  href?: string;
  onClick?: () => void;
}

const ModelCanvas = ({
  model,
  title,
  description,
  backgroundColor,
  titleColor = "black",
  descriptionColor = "gray",
  width = "300px",
  height = "300px",
  href = "#",
  onClick,
}: ModelCanvasProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // const { lightPosition1, lightPosition2 } = useControls({
  //   lightPosition1: {
  //     value: [-5, 15, 20],
  //     step: 1,
  //   },
  //   lightPosition2: {
  //     value: [5, -15, -15],
  //     step: 1,
  //   },
  // });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center shadow-lg justify-end pb-5 rounded-3xl overflow-visible transform transition-transform duration-1000 ease-in-out ${
        isHovered ? "scale-105" : "scale-100"
      } ${
        isMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } transition-all duration-700 ease-in-out`}
      style={{
        width,
        height,
        backgroundColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}>
      <div
        className={`absolute bottom-16 z-50 pb-20 transition-all duration-700 ease-in-out transform w-[300px] h-[400px] ${
          isMounted
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}>
        <Canvas className="bg-transparent">
          <Environment preset="sunset" />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />

          <directionalLight position={[-10, -30, 20]} intensity={5} />
          <directionalLight position={[-5, 12, -40]} intensity={5} />
          {model ? React.cloneElement(model, { isHovered }) : null}
        </Canvas>
      </div>

      <div className="px-4 w-full">
        <div className="mt-24 z-10 right-10 md:right-16 flex flex-col items-start">
          <h2
            className="text-xl font-bold mb-2 text-white/80"
            style={{ color: titleColor }}>
            {title}
          </h2>
          <p className="text-white/80" style={{ color: descriptionColor }}>
            Persentase <span className="font-semibold">{description}</span>
          </p>
        </div>
        <a
          href={href}
          className="mt-4 px-4 md:right-20 inline-block text-center bg-white/20 w-full border border-white/25 hover:bg-white/30 backdrop-blur-md text-white py-2 rounded">
          Pilih
        </a>
      </div>
    </div>
  );
};

export default ModelCanvas;
