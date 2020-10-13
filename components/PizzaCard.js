import React from 'react';
import { Platform, Image, StyleSheet, View } from 'react-native';

import InfoRow from './InfoRow';

/*
    A PizzaCard has the name, image, and price of a pizza. UPDATE BEFORE MERGING.
*/
export default class PizzaCard extends React.Component {
    render() {
        const { style, image, name, price } = this.props;
        return (
            <View style={style}>
                <Image
                    style={styles.image}
                    source={image}
                />
                <InfoRow
                    name={name}
                    price={price}
                />
            </View>
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