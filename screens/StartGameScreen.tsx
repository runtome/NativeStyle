import { TextInput, View } from "react-native";

import PrimaryButton from "@/components/PrimaryButton";

function StartGameScreen() {
  return (
    <View>
        <TextInput placeholder="Enter a number" />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;