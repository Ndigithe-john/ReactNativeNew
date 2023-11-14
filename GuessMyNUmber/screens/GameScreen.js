import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Buttons from "../components/ui/Buttons";
import GuessLogItem from "../components/game/GuessLogItem";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userInputNumber, whenGameOver }) {
  const initial = generateRandomBetween(1, 100, userInputNumber);
  const [currentGuess, setCurrentGuess] = useState(initial);
  const [guessRounds, setGuessRounds] = useState([initial]);
  useEffect(() => {
    if (currentGuess === userInputNumber) {
      whenGameOver(guessRounds.length);
    }
  }, [currentGuess, userInputNumber, whenGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userInputNumber) ||
      (direction === "greater" && currentGuess > userInputNumber)
    ) {
      Alert.alert("Dont Lie", "Give the right directions to enjoy the game", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }
  const guessRoundsListsLength = guessRounds.length;
  return (
    <View style={styles.container}>
      <Title>Opponet's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>
        <Buttons>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" color="white" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" color="white" size={24} />
            </PrimaryButton>
          </View>
        </Buttons>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound=><Text key= {guessRound}>{guessRound}</Text> )} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListsLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  instructionText: {
    marginBottom: 16,
  },

  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
