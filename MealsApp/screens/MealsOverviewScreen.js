import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View style={styles.continer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
