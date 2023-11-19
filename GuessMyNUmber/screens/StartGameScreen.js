import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Buttons from "../components/ui/Buttons";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
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
  const marginTopDimensions = height < 400 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[styles.mainContainer, { marginTop: marginTopDimensions }]}
        >
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
                <PrimaryButton onPress={confirmInputHadler}>
                  Confrim
                </PrimaryButton>
              </View>
            </Buttons>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHeight=Dimensions.get('window').height; instead i used useWindowDimensions hook since this is locked
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    // marginTop: deviceHeight<400? 30:100,
    marginHorizontal: 20,
    alignItems: "center",
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
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },

  buttonContainer: {
    flex: 1,
  },
});
