import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { CryptoProvider } from "./CryptoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CryptoProvider>
        <App />
      </CryptoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
