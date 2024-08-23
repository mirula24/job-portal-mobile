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

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

import Header from "./assets/component/Header.js";
import Search from "./assets/component/Search.js";
import Job from "./assets/component/Job.js";
import JobDetail from "./assets/component/JobDetail.js";

SplashScreen.preventAutoHideAsync();
const tamaguiConfig = createTamagui(config);
export default function App() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <ScrollView>
          <View>
            <Header
              pressHandler={() => {
                setShowSearch(!showSearch);
              }}
              
            />
            {showSearch && <Search />}

            <Job/>
            <JobDetail />
            
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
