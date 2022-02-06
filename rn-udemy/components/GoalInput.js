import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const addGoalHandler = () => {
    let tmpGoal = goal
    setGoal('')
    props.onAddGoal(tmpGoal)
  }

  const cancelGoalHandler = () => {
    setGoal('')
    props.onCancelGoal()
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter"
          style={styles.input}
          onChangeText={setGoal}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color='red' onPress={cancelGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "72%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%"
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
