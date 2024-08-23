import { Button, XStack, Text } from "tamagui";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as SplashScreen from "expo-splash-screen";
import { Pressable } from "react-native";

export default function Header({ pressHandler }) {
  const [loaded, error] = useFonts({
    cyber: require("../fonts/cyber.ttf"),
    toleran: require("../fonts/Tolerant.ttf"),
    "poppins-Bold": require("../fonts/Poppins-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <XStack
      backgroundColor="skyblue"
      width="100%"
      marginTop={32}
      height={60}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={10}
      position="fixed"
      top={0}
      zIndex={1000}
    >
      <Text fontSize={32} fontWeight={500} fontFamily={"poppins-Bold"}>
        GitHub Job
      </Text>
        <Button onPress={pressHandler} size="$4" circular backgroundColor={"transparent"}>
          <AntDesign name="search1" size={24} color="black" />
        </Button>
    </XStack>
  );
}
