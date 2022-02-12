import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  const meal = props.meal;
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => props.onSelected(meal)}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>{meal.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{meal.duration}m</Text>
            <Text>{meal.complexity}</Text>
            <Text>{meal.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow:'hidden',
    marginVertical: 10,
    elevation: 4
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    padding: 5,
    justifyContent: "space-between",
    alignItems: 'center',
    height:  '15%'
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: 'flex-end'
  },
});

export default MealItem;
