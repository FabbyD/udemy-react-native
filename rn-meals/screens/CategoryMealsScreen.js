import { StyleSheet, View, FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const category = props.route.params.category;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(category.id) >= 0
  );

  const renderMeal = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        onSelected={(meal) =>
          props.navigation.navigate("MealDetails", { meal: meal })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default CategoryMealsScreen;
