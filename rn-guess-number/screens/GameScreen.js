import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import SelectedNumber from "../components/SelectedNumber";
import Card from "../components/Card";
import TitleText from "../components/TitleText";

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

const GameScreen = (props) => {
  const [guess, setGuess] = useState(
    generateRandomNumber(1, 100, props.selectedNumber)
  );

  const lowest = useRef(1);
  const greatest = useRef(100);

  const { selectedNumber, onGameFinished } = props;

  useEffect(() => {
      console.log(`Guess: ${guess}, Number: ${selectedNumber}`)
    if (guess === selectedNumber) {
      console.log("Victoire")
      props.onGameFinished();
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

    setGuess(generateRandomNumber(lowest.current, greatest.current, guess));
  };

  return (
    <View>
      <TitleText>Guess</TitleText>
      <SelectedNumber>{guess}</SelectedNumber>
      <Card>
        <Button title="+" onPress={nextGuessHandler.bind(this, true)} />
        <Button title="-" onPress={nextGuessHandler.bind(this, false)} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
