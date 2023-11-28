import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealsAbout/Subtitle";
import Lists from "../components/MealsAbout/Lists";
function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image
        style={styles.imageStyles}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <Text style={styles.titleStyles}>{selectedMeal.title}</Text>
      <MealDetails
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listsStyles}>
          <Subtitle>Ingredients</Subtitle>
          <Lists data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <Lists data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    height: 300,
  },
  titleStyles: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 6,
    fontStyle: "italic",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listsStyles: {
    maxWidth: "88%",
  },
  outerListContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
});
