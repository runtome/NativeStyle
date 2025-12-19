
import { Dimensions, StyleSheet, View } from "react-native";


function Card({children}: {children: React.ReactNode}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36, // Responsive margin based on device width
    marginHorizontal: deviceWidth < 380 ? 18 : 36, // Responsive margin based on device width
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },  
});
