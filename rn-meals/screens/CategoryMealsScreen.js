import { StyleSheet, View, Text, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  const category = props.route.params.category;
  return (
    <View style={styles.screen}>
      <Text>The Category Meals screen! {category.title}</Text>
      <Button title="Go to meal!" onPress={() => {props.navigation.navigate("MealDetails")}} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
