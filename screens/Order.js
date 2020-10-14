import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import OrderHeader from '../components/OrderHeader';
import pepperoniImage from '../assets/pepperoni.jpg';
import hawaiianImage from '../assets/hawaiian.jpg';
const HAWAIIAN_NAME = "Hawaiian Pizza";

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/
export default class Order extends React.Component {
    render() {
        // const { style, image, name } = this.props;
        const { style } = this.props;
        return (
            <View style={style}>
                <OrderHeader 
                    // image={image}
                    // name={name}
                    image={hawaiianImage}
                    name={HAWAIIAN_NAME}
                ></OrderHeader>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        // color: 'white',
        flex: 1,
    },
});