import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

import OrderHeader from '../components/OrderHeader';
import SizeMenu from '../components/SizeMenu';
import TotalRow from '../components/TotalRow';

/*
    This screen is opened by tapping a Card on the CardList screen. It displays relevant information
    given the Card/pizza that was tapped on. It lets the user pick the size of pizza they want,
    shows them the total after tax, and lets the user place an order for delivery by tapping the
    order button.
*/
export default function Order({ style, image, name, size, price, onPressClose, onSizeSelection }) {
    return (
        <View style={style}>
            <OrderHeader 
                image={image}
                name={name}
            ></OrderHeader>
            <SizeMenu 
                mediumPrice={price}
                onSizeSelection={onSizeSelection}
            />
            <TotalRow tax={0.12} subtotal={size} />
            <Button
                onPress={()=> Alert.alert("Delivery On the Way",
                                "Thank you for your purchase.\nYour " + name + " is on the way!")}
                title="ORDER"
            />
            <Button
                onPress={onPressClose}
                title={"Close Window"}
                color={styles.closeButton.color}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
    },
    closeButton: {
        color: 'red',
    },
});