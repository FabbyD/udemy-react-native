import { StyleSheet, View, Text } from "react-native";

const MealDetailsScreen = (props) => {
  const meal = props.route.params.meal;
  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
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

export default MealDetailsScreen;
