import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
export const navigationRef = createNavigationContainerRef<ScreenParams>();

//importing the Screens
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";

export type ScreenParams = {
  Camera: {};
  Home: {};
};

const Stack = createNativeStackNavigator<ScreenParams>();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
