import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./components/App.tsx";
import "./components/App.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
