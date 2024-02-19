import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme";
import App from "./App";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <Box display={{ base: "none", lg: "block" }}>
          <CSSReset />
          <App />
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
