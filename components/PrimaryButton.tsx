import { Text, View } from "react-native";

function PrimaryButton({children}: {children: string   }) {
  return (
    <View>
        <Text>{children}</Text>
        
    </View>
  );
}

export default PrimaryButton;