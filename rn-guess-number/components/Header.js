import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 60,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
  },
});

export default Header;
