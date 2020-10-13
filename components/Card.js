import React from 'react';
import { TouchableOpacity, Platform, Image, StyleSheet, View } from 'react-native';

import InfoRow from './InfoRow';

/*
    A PizzaCard has the name, image, and price of a pizza. UPDATE BEFORE MERGING.
*/
export default class Card extends React.Component {
    render() {
        const { style, image, name, price } = this.props;
        return (
            <TouchableOpacity style={style}>
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
}

const styles = StyleSheet.create({
    image: {
        marginHorizontal: Platform.OS === 'ios' ? 38 : 55,
        height: 300,
        width: 300,
        backgroundColor: 'grey',
    },
});