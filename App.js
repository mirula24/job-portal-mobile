import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  Button,
  XStack,
  YStack,
  Text,
  Input,
  Label,
  Checkbox,
  ScrollView,
  Image,
  Paragraph,
} from "tamagui";
import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config/v3";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { jobs } from "./Seeder.ts";

SplashScreen.preventAutoHideAsync();
const tamaguiConfig = createTamagui(config);
export default function App() {
  const [loaded, error] = useFonts({
    cyber: require("./assets/fonts/cyber.ttf"),
    toleran: require("./assets/fonts/Tolerant.ttf"),
    "poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
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
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <ScrollView>
          <View>
            <XStack
              backgroundColor="skyblue"
              width="100%"
              marginTop={32}
              height={60}
              alignItems="center"
              justifyContent="space-between"
              paddingHorizontal={10}
              position="absolute"
              top={0}
              zIndex={1000}
            >
              <Text fontSize={32} fontWeight={500} fontFamily={"poppins-Bold"}>
                GitHub Job
              </Text>
              <Button size="$4" circular backgroundColor={"transparent"}>
                <AntDesign name="search1" size={24} color="black" />
              </Button>
            </XStack>

            <YStack marginTop={100} padding={5} marginLeft={5} justifyContent="center" marginInline={'auto'}>
              <YStack>
                <Label size="$5">Location</Label>
                <Input size="$5" width={300}></Input>
              </YStack>
              <YStack>

              <Label size="$5">Description</Label>
              <Input size="$5" width={300}></Input>
              </YStack>
              <XStack alignItems="center">
                <Checkbox size="$5">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox>
                <Label padding={5} size="$5">Fulltime</Label>
              </XStack>
              {jobs.map((data) => {
                return <View></View>;
              })}
            </YStack>
          </View>
        </ScrollView>
      </TamaguiProvider>
    </SafeAreaView>
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
