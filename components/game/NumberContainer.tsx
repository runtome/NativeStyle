import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/colors';

interface NumberContainerProps {
  children: React.ReactNode;
}

function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24, // Responsive padding based on device width
    margin: deviceWidth < 380 ? 12 : 24, // Responsive margin based on device width
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36, // Responsive font size based on device width
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});