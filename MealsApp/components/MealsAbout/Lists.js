import { StyleSheet, View, Text } from "react-native";

function Lists({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}
export default Lists;
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
