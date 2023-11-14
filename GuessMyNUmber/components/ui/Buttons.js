import { StyleSheet, View } from "react-native";

function Buttons({ children }) {
  return <View style={styles.buttonsContainer}>{children}</View>;
}
export default Buttons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
});
