import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [addVisible, setAddVisible] = useState(false);

  const addGoalHandler = (title) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: currentGoals.length, value: title },
    ]);
    setAddVisible(false)
  };

  const deleteGoalHandler = (key) => {
    setGoals((currentGoals) =>
      currentGoals.filter((value) => value.key !== key)
    );
  };

  const cancelGoalHandler = () => {
    setAddVisible(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={setAddVisible.bind(this, true)} />
      <GoalInput visible={addVisible} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalHandler}/>
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "72%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});
