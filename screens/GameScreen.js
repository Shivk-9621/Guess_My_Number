import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const nextGuessHandler = (direction) => { // direction => 'lower', 'greater'
        if(direction === 'lower'){
            maxBoundary = currentGuess - 1
            generateRandomBetween(minBoundary,maxBoundary)
        }
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower ?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
                </View>
            </View>
            <View>{/* LOG ROUNDS */}</View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});
