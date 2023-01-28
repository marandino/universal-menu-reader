import { Camera, CameraType, onCameraReady } from "expo-camera";
import { useRef, useState } from "react";
import { Button, Text, View, Container, Image } from "native-base";

async function takePicture() {
  if (!permission) return;
  const photo = await cameraRef.current.takePictureAsync();
  setPictureOnBuffer(photo);
}
export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [isPictureOnBuffer, setPictureOnBuffer] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  let cameraRef = useRef(null);

  if (!permission) {
    // this will also be null, if the camera hasn't loaded yet
    return <View />;
  }

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
          onPress={() => setPictureOnBuffer(null)}
        >
          Go Back
        </Button>
      </View>
    );
  }

  return (
    <View flex={1}>
      <Camera ref={cameraRef} flex={1} type={type}>
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
