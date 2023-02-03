import * as React from "react";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import Navigation from "./Navigation";

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        400: "#f98120",
        500: "#f98120",
        600: "#f98120",
      },
      secondary: {
        400: "#3b82f6",
        500: "#3b82f6",
        600: "#3b82f6",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      // initialColorMode: "dark",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar />
      <Navigation />
    </NativeBaseProvider>
  );
}
