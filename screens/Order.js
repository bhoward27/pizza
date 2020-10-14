import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import OrderHeader from '../components/OrderHeader';
import SizeMenu from '../components/SizeMenu';

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/
export default class Order extends React.Component {
    render() {
        const { style, image, name, price } = this.props;
        return (
            <View style={style}>
                <OrderHeader 
                    image={image}
                    name={name}
                ></OrderHeader>
                {/* <SizeMenu mediumPrice={price} ></SizeMenu> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
    },
});