import Colors from '@/constants/colors';
import { StyleSheet, Text } from 'react-native';

function InstructionText({children}: {children: React.ReactNode}) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;


const styles = StyleSheet.create({
    
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },  
});