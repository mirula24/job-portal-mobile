import React from "react";
import { jobs } from "../../Seeder.ts";
import { Text, YStack, XStack, Button } from "tamagui";
import { View } from "react-native";
import * as Linking from 'expo-linking';

export default function Job() {
  return (
    <YStack>
      {jobs.map((datas) => {
        const truncatedDescription = datas.title
          .split(" ")
          .slice(0, 4)
          .join(" ");
        const formatDate =
          datas.created_at.split(" ")[0] +
          " " +
          datas.created_at.split(" ")[1] +
          " " +
          datas.created_at.split(" ")[2];

        return (
          <View
            style={{
              padding: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 2,
              borderColor:"#7C93C3",
              margin: 5,
              borderRadius: 10,
            }}
          >
            <YStack
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <Text
                style={{
                  color: "#125B9A",
                  fontFamily: "poppins-Bold",
                }}
              >
                {truncatedDescription}
              </Text>
              <Text>{datas.location}</Text>
              <Text>{datas.type}</Text>
            </YStack>
            <YStack
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                alignItem: "center",
                justifyContent: "center",
                paddingStart: 5,
              }}
            >
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >Upload : {formatDate}
              </Text>
              <Button
                onPress={() => Linking.openURL(`${datas.company_url}`)}
              >Check Company</Button>
            </YStack>
          </View>
        );
      })}
    </YStack>
  );
}
