import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { Amplify } from "aws-amplify";
// @ts-ignore
import outputs from "../amplify_outputs.json";
import "./main.css";
import { ConfigProvider } from "antd";

Amplify.configure(outputs);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
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
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
