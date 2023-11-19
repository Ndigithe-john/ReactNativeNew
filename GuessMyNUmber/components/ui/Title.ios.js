import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-regular",
    fontSize: 28,
    color: Colors.accent500,
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
    marginTop: 16,
    borderRadius: 2,
    maxWidth: "80%",
    width: 300,
  },
});
