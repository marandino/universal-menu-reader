import React from "react";
import { Box, View, Button, Text, Heading, Container, HStack } from "native-base";
import { Linking } from "react-native";
import { ScreenProps } from "../Navigation";

//TODO: extract this into a separate file if it grows too long, or if it's used in multiple places
function openLink(url: string) {
  Linking.openURL(url);
}

export default function HomeScreen({ navigation }: ScreenProps) {
  return (
    <View h={"100%"} background="primary">
      <Box
        bg={"white"}
        py="10"
        px="6"
        rounded="lg"
        alignSelf="center"
        my="auto"
      >
        <Box rounded="lg">
          <Heading alignSelf={"center"}>Get started</Heading>
          <Text mt={4} fontSize="md" style={{ textAlign: "center" }}>
            Please choose both currencies and give us camera permissions.
          </Text>
          <Text style={{ textAlign: "center" }} fontSize="md" mt={4}>
            as an{" "}
            {/*the reason why we're using this react native Linking with onPress mess
            instead of the nativebase approach is related to this:
            https://github.com/GeekyAnts/NativeBase/issues/5296 */}
            <Text
              fontSize="md"
              color={"primary.600"}
              onPress={() =>
                openLink("https://github.com/marandino/universal-menu-reader")
              }
            >
              open-source project{" "}
            </Text>
            you can be sure we're not selling your data.
          </Text>
        </Box>
        <Button
          mt={6}
          colorScheme="primary"
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          Open Camera
        </Button>
        <Container alignSelf={"center"} >
          <HStack space="1">
            <Button
              variant={"ghost"}
              colorScheme="secondary"
              mt={"2"}
              onPress={() => {
                console.log("hello");
              }}
            >
              CRC
            </Button>
            <Text mt={"4"} textAlign={"center"} fontSize="md">to</Text>
            <Button fontSize="md"
              variant={"ghost"}
              colorScheme="secondary"
              mt={"2"}
              onPress={() => {
                console.log("hello");
              }}
            >
              USD
            </Button>
          </HStack>
        </Container>
      </Box>
    </View>
  );
}