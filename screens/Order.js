import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

import OrderHeader from '../components/OrderHeader';
import SizeMenu from '../components/SizeMenu';
import TotalRow from '../components/TotalRow';

/*
    Class-level comment. UPDATE BEFORE MERGING.
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
                style={styles.orderButton}
                onPress={()=> Alert.alert("Delivery On the Way",
                                "Thank you for your purchase.\nYour " + name + " is on the way!")}
                title="ORDER"
            />
            <Button
                style={styles.closeButton}
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
    orderButton: {

    },
});