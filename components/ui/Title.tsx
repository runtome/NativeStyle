import { Platform, StyleSheet, Text } from 'react-native';

import Colors from '@/constants/colors';


interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    // fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    borderWidth: Platform.select({ ios: 0, android: 2 }), // alternative way
    //can also use Title.ios.tsx and Title.android.tsx files to have platform specific code
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});