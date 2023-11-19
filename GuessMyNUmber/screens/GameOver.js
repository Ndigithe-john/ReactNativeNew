import {
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({ numberOfRounds, userInputedNumber, onStartNewGame }) {
  const { length, width } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.mainContainer}>
        <Title>GAME OVER🥳</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}
export default GameOver;

// const deviceWidth = Dimensions.get("window").width;
const imageStyle = {
  width: imageSize,
  height: imageSize,
  borderRadius: imageSize / 2,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
