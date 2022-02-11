import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from "./Card";

const CategoryGridTile = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS == "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <Card
      style={{
        backgroundColor: props.category.backgroundColor,
        ...styles.container,
      }}>
      <TouchableNativeFeedback
        style={{ flex: 1 }}
        onPress={() => props.onPress(props.category)}>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {props.category.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow: "hidden"
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryGridTile;
