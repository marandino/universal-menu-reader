import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Camera"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
