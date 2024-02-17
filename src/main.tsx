import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
