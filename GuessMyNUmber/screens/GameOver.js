import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({ numberOfRounds, userInputedNumber, onStartNewGame }) {
  return (
    <View style={styles.mainContainer}>
      <Title>GAME OVER🥳</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed{" "}
        <Text style={styles.textHighlight}>{numberOfRounds}</Text> rounds to
        guess the number{" "}
        <Text style={styles.textHighlight}>{userInputedNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOver;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  textHighlight: {
    fontFamily: "open-sans-condensed",
    color: Colors.primary500,
  },
});
