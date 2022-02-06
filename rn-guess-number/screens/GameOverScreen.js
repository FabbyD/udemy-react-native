import { StyleSheet, Text, View, Button } from "react-native";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
    return <View style={styles.container}>
        <TitleText>GAME OVER</TitleText>
        <Button title="RESTART" onPress={props.onRestartGame} />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default GameOverScreen;
