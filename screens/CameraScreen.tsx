import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { Button, Text, View, Container, Image } from "native-base";

//Navigation Types and Props
import { ScreenParams } from "../Navigation";
type Props = NativeStackScreenProps<ScreenParams, "Camera">;
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function CameraScreen({ route }: Props) {
  const { localCurrency, foreignCurrency } = route.params;
  const [type, setType] = useState(CameraType.back);
  const [isPictureOnBuffer, setPictureOnBuffer] =
    useState<CameraCapturedPicture>();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  // I really don't like this <any> here, but after reading expo's documentation, I couldn't find a way to fix this.
  // https://github.com/expo/expo/issues/4399
  let cameraRef = useRef<Camera | any>();

  async function takePicture() {
    if (!permission || !cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    setPictureOnBuffer(photo);
  }

  if (!permission) {
    // this will also be null, if the camera hasn't loaded yet
    return <View />;
  }

  // iOS is broken here...
  if (!permission.granted) {
    return (
      <Container m={"auto"}>
        <Text>We need your permission to show the camera</Text>
        <Button
          mx={"auto"}
          mt={4}
          colorScheme="primary"
          onPress={() => requestPermission}
        >
          Grant Permissions
        </Button>
      </Container>
    );
  }

  // this is a part of the code that came with the template from code expo, but we'll not need it.
  // function toggleCameraType() {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  if (isPictureOnBuffer) {
    return (
      <View flex={1}>
        <Image
          source={{ uri: isPictureOnBuffer.uri }}
          alt="Picture taken"
          resizeMode="contain"
          flex={1}
        />
        <Button
          position={"absolute"}
          m="4"
          colorScheme="secondary"
          onPress={() => setPictureOnBuffer(undefined)}
        >
          Go Back
        </Button>
      </View>
    );
  }

  return (
    <View flex={1}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type}>
        <Button
          alignSelf={"center"}
          my={"auto"}
          colorScheme="primary"
          onPress={takePicture}
        >
          Take Picture
        </Button>
      </Camera>
    </View>
  );
}
