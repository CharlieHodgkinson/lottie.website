import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8b315d",
          colorInfo: "#8b315d",
          colorTextBase: "#111111",
          colorBgBase: "#c0c0c0",
          colorError: "#a84370",
          colorWarning: "#b77896",
          fontFamily: 'Tahoma, Arial, sans-serif',
          fontSize: 16,
        },
        components: {
          Timeline: {
            tailColor: "#8b315d",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
