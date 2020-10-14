import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
    This component appears beneath the SizeMenu and above the order button. It shows the
    total after tax, given the selected pizza and size.
*/

export default class TotalRow extends React.Component {
    render() {
        const { subtotal, tax } = this.props;
        const PRECISION = 2;
        const PRECISION_FACTOR = Math.pow(10, PRECISION);
        const total = Math.round(subtotal * (tax + 1) * PRECISION_FACTOR) / PRECISION_FACTOR;
        
        return (
            <View style={styles.container}>
                <Text style={styles.totalLabel}>Total (after tax): </Text>
                <Text style={styles.totalValue}>{"$" + total}</Text>
            </View>
        );
    }
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