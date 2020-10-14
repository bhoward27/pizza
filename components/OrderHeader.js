import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/
export default function OrderHeader({ image, name }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={image}
            />
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 300,
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});