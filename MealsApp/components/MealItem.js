import { Pressable, Text, View, StyleSheet, Image } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "ccc" }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration}</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 12,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
