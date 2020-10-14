import React from 'react';
import { TouchableOpacity, Platform, Image, StyleSheet } from 'react-native';

import InfoRow from './InfoRow';

/*
    A Card has the name, image, and price of a pizza. UPDATE BEFORE MERGING.
*/
export default function Card({ style, image, name, price, onPressCard }) {
    return (
        <TouchableOpacity style={style} onPress={onPressCard}>
            <Image
                style={styles.image}
                source={image}
            />
            <InfoRow
                name={name}
                price={price}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        marginHorizontal: Platform.OS === 'ios' ? 38 : 55,
        height: 300,
        width: 300,
        backgroundColor: 'grey',
    },
});