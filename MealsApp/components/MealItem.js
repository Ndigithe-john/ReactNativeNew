import { Pressable, Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealHandler() {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={selectMealHandler} android_ripple={{ color: "ccc" }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          complexity={complexity}
          affordability={affordability}
          duration={duration}
        />
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
});
