import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
// @ts-ignore
import outputs from "../amplify_outputs.json";
import "./main.css";
import { ConfigProvider } from "antd";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

Amplify.configure(outputs);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#cd5ff8",
          colorInfo: "#cd5ff8",
          colorTextBase: "#ffffff",
          colorBgBase: "#1b1429",
          colorError: "#eb2f74",
          colorWarning: "#fad014",
          fontFamily: "Kodchasan, sans-serif",
          fontSize: 16,
        },
        components: {
          Timeline: {
            tailColor: "#eeb3ff",
          },
        },
      }}
    >
      <div
        style={{
          position: "fixed",
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover !important",
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas className="canvas">
          <ambientLight intensity={3} />
          <Stars
            radius={100}
            depth={100}
            count={8000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
      <App />
    </ConfigProvider>
  </StrictMode>
);
