import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import OrderHeader from '../components/OrderHeader';
import SizeMenu from '../components/SizeMenu';
import TotalRow from '../components/TotalRow';

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/
export default class Order extends React.Component {
    render() {
        const { style, image, name, price, onPressClose } = this.props;
        return (
            <View style={style}>
                <OrderHeader 
                    image={image}
                    name={name}
                ></OrderHeader>
                <SizeMenu mediumPrice={price} ></SizeMenu>
                <TotalRow tax={0.12} subtotal={20.99}></TotalRow>
                <Button
                    style={styles.closeButton}
                    onPress={onPressClose}
                    title={"Close Window"}
                    color={styles.closeButton.color}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
    },
    closeButton: {
        color: 'red',
        //justifyContent: 'flex-end',
    },
});