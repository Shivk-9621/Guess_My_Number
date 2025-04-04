import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4, // shadow for android 
        shadowColor: 'black', // shadow for IOS
        shadowOffset: { width: 0, height: 0 }, // shadow for IOS
        shadowOpacity: 0.25, // shadow for IOS
        shadowRadius: 3, // shadow for IOS
        overflow: 'hidden',
    },
    itemText: {
        fontFamily: 'open-sans',
    }
})