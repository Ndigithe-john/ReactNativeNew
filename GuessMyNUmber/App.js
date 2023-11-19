import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Colors from "./constants/colors";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-condensed": require("./assets/fonts/OpenSans_Condensed-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function startGameHundler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHundler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={startGameHundler} />;
  if (userNumber) {
    screen = (
      <GameScreen userInputNumber={userNumber} whenGameOver={gameOverHundler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userInputedNumber={userNumber}
        numberOfRounds={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary650, Colors.accent500]}
        style={styles.appContainer}
      >
        <ImageBackground
          style={styles.appContainer}
          source={require("./assets/images/dice.jpg")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
