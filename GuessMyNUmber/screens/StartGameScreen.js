import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Buttons from "../components/ui/Buttons";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHadler() {
    const userInputNumber = parseInt(enteredNumber);
    if (
      isNaN(userInputNumber) ||
      userInputNumber <= 0 ||
      userInputNumber > 99
    ) {
      //show alert
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(userInputNumber);
  }
  return (
    <View style={styles.mainContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number to continue</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <Buttons>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHadler}>Confrim</PrimaryButton>
          </View>
        </Buttons>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
  },

  textInput: {
    height: 50,
    width: "30%",
    justifyContent: "center",
    fontSize: 24,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "open-sans-bold",
    textAlign: "center",
  },

  buttonContainer: {
    flex: 1,
  },
});
