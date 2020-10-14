import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

/*
    An InfoRow is a row containing the name and price of a pizza, to be displayed below the image
    on a Card. UPDATE BEFORE MERGING. 
*/
export default function InfoRow({ name, price }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name} numberOfLines={1}>
                {name}
            </Text>
            <Text style={styles.price} numberOfLines={1}>
                {"$" + price}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
        height: 30,
    },
    name: {
        marginHorizontal: 55,
        color: 'black',
    },
    price: {
        marginHorizontal: 55,
        color: 'green',
    }
});