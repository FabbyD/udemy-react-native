import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50
  },
  text: {
    color: "white",
    fontFamily: 'open-sans',
    fontSize: 18
  },
});

export default MainButton;
