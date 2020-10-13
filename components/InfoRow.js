import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function InfoRow({ name, price }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name} numberOfLines={1}>
                {name}
            </Text>
            <Text style={styles.price} numberOfLines={1}>
                {price}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    name: {
        color: 'black',
    },
    price: {
        color: 'green',
    }
});