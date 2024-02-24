import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GameProvider } from "./contexts/GameContext.jsx";
import { UiProvider } from "./contexts/UiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UiProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </UiProvider>
  </React.StrictMode>
);
