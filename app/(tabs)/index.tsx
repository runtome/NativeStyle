import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


import Colors from "@/constants/colors";
import GameOverScreen from "../../screens/GameOverScreen";
import GameScreen from '../../screens/GameScreen';
import StartGameScreen from '../../screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
  });
  // if (!fontsLoaded) {
  //   return null;
  // }
  // Building Adaptive User Interfaces with React Native

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
                roundsNumber={guessRounds} 
                userNumber={userNumber} 
                onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient 
      colors={[Colors.primary700, Colors.accent500]} 
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('../../assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});