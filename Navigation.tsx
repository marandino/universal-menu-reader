import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
export const navigationRef = createNavigationContainerRef<ScreenParams>();

//importing the Screens
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";

// in case we need to pass a parameter into a screen, we can do it here like this:
// Home: { userId: string }; instead of undefined
export type ScreenParams = {
  Camera: undefined;
  Home: undefined;
};
export type ScreenProps = NativeStackScreenProps<ScreenParams>;

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
