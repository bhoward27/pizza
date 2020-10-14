import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/

export default function TotalRow({ tax, subtotal }) {
    const PRECISION = 2;
    const PRECISION_FACTOR = Math.pow(10, PRECISION);
    const total = Math.round(subtotal * (tax + 1) * PRECISION_FACTOR) / PRECISION_FACTOR;
    return (
        <View style={styles.container}>
            <Text style={styles.totalLabel}>Total: </Text>
            <Text style={styles.totalValue}>{"$" + total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    totalLabel: {
        fontSize: 24,
    },
    totalValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
});