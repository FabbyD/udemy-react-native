import { View, StyleSheet, TextInput } from "react-native";

const Input = props => {
  return <View>
      <TextInput {...props} style={{...props.style, ...styles.input}} />
  </View>;
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center'
    }
});

export default Input;
