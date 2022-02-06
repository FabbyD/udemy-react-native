import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => (
  <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.goal}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  goal: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: "pink",
    borderColor: "magenta",
    borderWidth: 2,
  },
});

export default GoalItem;
