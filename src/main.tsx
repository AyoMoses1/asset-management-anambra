import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index";
import { Provider } from "react-redux";
import App from "./App";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "./index.css";
import { NavigationProvider } from "contexts/NavContexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <ChakraProvider theme={customTheme}>
            <Box display={{ base: "none", lg: "block" }}>
              <CSSReset />
              <NavigationProvider>
                <App />
              </NavigationProvider>
            </Box>
          </ChakraProvider>
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
