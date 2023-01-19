import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box, Button, Avatar, VStack } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
      <Button
        colorScheme="primary"
        onPress={() => {
          console.log('chino kyc')
        }}

      >
        hola que hace
      </Button>

      <VStack space="20"
        marginY={"auto"}
        alignItems={{
          base: "center",
          md: "flex-start"
        }}
      >

        <Avatar
          source={require('./assets/1.jpg')}
        >
          Monoz
        </Avatar>

        <Avatar
          source={{
            uri: "https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg"
          }}

        >
          SS
        </Avatar>
      </VStack>



    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
