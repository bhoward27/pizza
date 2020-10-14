import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

export default class Order extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is the order screen.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    text: {
        color: 'white',
        flex: 1,
    },
});