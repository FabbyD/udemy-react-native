import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () =>
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [loaded, setLoaded] = useState(false);
  const [numRounds, setNumRounds] = useState(0);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGame = () => {
    setNumRounds(0);
    setSelectedNumber(0);
  };

  let content;
  if (numRounds > 0) {
    content = <GameOverScreen numRounds={numRounds} selectedNumber={selectedNumber} onRestartGame={configureNewGame} />;
  } else if (selectedNumber) {
    content = (
      <GameScreen
        selectedNumber={selectedNumber}
        onGameFinished={numRounds => setNumRounds(numRounds)}
      />
    );
  } else {
    content = (
      <StartGameScreen
        onStartGame={(number) => {
          setSelectedNumber(number);
        }}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
