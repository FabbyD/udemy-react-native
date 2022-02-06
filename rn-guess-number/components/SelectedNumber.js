import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import BodyText from "./BodyText";

const SelectedNumber = (props) => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.number}>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      padding: 20,
      marginVertical: 5,
      borderRadius: 4
  },
  number: {
    fontSize: 32,
    color: 'white'
  }
});

export default SelectedNumber;
