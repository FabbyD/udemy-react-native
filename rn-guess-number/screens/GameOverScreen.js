import { StyleSheet, Text, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.container}>
      <TitleText>GAME OVER</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
        {/* <Image source={{uri:"https://media.istockphoto.com/photos/businessman-at-top-of-mountain-peak-holds-large-flag-picture-id1321329396?b=1&k=20&m=1321329396&s=170667a&w=0&h=uZERXRvljPoIL1VsKha3bUbrY0xoFCila8lpChias5g="}} style={styles.image} /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone took{" "}
          <Text style={styles.hightlight}>{props.numRounds}</Text> rounds to
          guess <Text style={styles.hightlight}>{props.selectedNumber}.</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestartGame}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    margin: 10
  },
  resultText: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 10
  },
  hightlight: {
    color: colors.primary,
  },
});

export default GameOverScreen;
