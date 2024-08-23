import React from "react";
import { Button, XStack, YStack, Input, Label, Checkbox, View } from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";

export default function Search() {
  return (
    <YStack
      padding={5}
      marginLeft={5}
      justifyContent="center"
      marginin="auto"
      alignSelf="center"
    >
      <YStack>
        <Label size="$5">Location</Label>
        <Input size="$5" width={300}></Input>
      </YStack>
      <YStack>
        <Label size="$5">Description</Label>
        <Input size="$5" width={300}></Input>
      </YStack>
      <XStack alignItems="center" justifyContent="space-between">
        <XStack alignItems="center">
          <Checkbox size="$5">
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox>
          <Label padding={5} size="$5">
            Fulltime
          </Label>
        </XStack >
        <Button size="$4">Search</Button>
      </XStack>
    </YStack>
  );
}
