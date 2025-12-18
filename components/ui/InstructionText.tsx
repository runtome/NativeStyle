import Colors from '@/constants/colors';
import { StyleSheet, Text } from 'react-native';

interface InstructionTextProps {
  children: React.ReactNode;
  style?: object;
}

function InstructionText({children, style}: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;


const styles = StyleSheet.create({
    
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },  
});