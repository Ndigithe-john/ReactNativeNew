import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummyData";
const MealsOverviewScreen = () => {
  return (
    <View style={styles.continer}>
      <Text>Meals Screeen</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 14,
  },
});
