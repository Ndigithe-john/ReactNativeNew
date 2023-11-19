import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 20,
    marginTop: deviceWidth < 350 ? 20 : 30,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
  },
});
