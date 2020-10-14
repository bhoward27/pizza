import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import OrderHeader from '../components/OrderHeader';
import SizeMenu from '../components/SizeMenu';

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
                <Button
                    style={styles.closeButton}
                    onPress={onPressClose}
                    title={"Close"}
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

    },
});