import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
  },
});
