import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  function renderMealItem(itemData) {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
    };
    return <MealItem {...mealItemProps} />;
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
