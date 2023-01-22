import React from "react";
import { Box, View, Button, Text, Heading, Link } from "native-base";

export default function HomeScreen() {
  return (
    <View h={"100%"} background="primary">
      <Box bg={"white"} py="10" px="6" rounded="lg" alignSelf="center" my="auto">
        <Box rounded="lg">
          <Heading alignSelf={"center"} >Get started</Heading>
          <Text mt={4} fontSize="md" style={{ textAlign: 'center' }}>
            Please choose both currencies and give us camera permissions.
          </Text>
          <Text style={{ textAlign: 'center' }} fontSize="md" mt={4}>
            As an <Link href="https://github.com/marandino/universal-menu-reader"><Text fontSize="md"> open-source project </Text>
            </Link>
            you can be sure we're not selling your data.
          </Text>
        </Box>
        <Button mt={6}
          colorScheme="primary"
          onPress={() => {
            console.log('hello')
          }}
        >
          Open Camera
        </Button>
        <Button variant={"ghost"} colorScheme="secondary" mt={"2"}
          onPress={() => {
            console.log('hello')
          }}
        >
          Select Currency
        </Button>
      </Box>
    </View>
  );
}
