import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Alert, Text } from "react-native";
import SelectedNumber from "../components/SelectedNumber";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import { AntDesign } from "@expo/vector-icons";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min) + min);
  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const renderListItem = (guess, round) => (
  <View key={guess} style={styles.listItem}>
    <BodyText>#{round}</BodyText>
    <Text>{guess}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.selectedNumber);
  const [guess, setGuess] = useState(initialGuess);
  // const [numRounds, setNumbRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const lowest = useRef(1);
  const greatest = useRef(100);

  const { selectedNumber, onGameFinished } = props;

  useEffect(() => {
    console.log(
      `Guess: ${guess}, Number: ${selectedNumber}, Lowest: ${lowest.current}, Greatest: ${greatest.current}`
    );
    if (guess === selectedNumber) {
      props.onGameFinished(pastGuesses.length);
    }
  }, [guess, selectedNumber, onGameFinished]);

  const nextGuessHandler = (isGreater) => {
    if (
      (isGreater && guess > props.selectedNumber) ||
      (!isGreater && guess < props.selectedNumber)
    ) {
      Alert.alert("LIAR", "Go to hell", [
        { style: "cancel", text: "Try again... Nerd" },
      ]);
      return;
    }

    if (isGreater) {
      lowest.current = guess + 1;
    } else {
      greatest.current = guess;
    }

    const nextGuess = generateRandomNumber(
      lowest.current,
      greatest.current,
      guess
    );
    setGuess(nextGuess);
    // setNumbRounds(numRounds + 1);
    setPastGuesses([nextGuess, ...pastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Guess</TitleText>
      <SelectedNumber>{guess}</SelectedNumber>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, true)}>
          <AntDesign name="up" size={24} color="black" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, false)}>
          <AntDesign name="down" size={24} color="black" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((pastGuess, index) =>
            renderListItem(pastGuess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    marginVertical: 15,
  },
  listContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    alignItems:'center'
  },
});

export default GameScreen;
