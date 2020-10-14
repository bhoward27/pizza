import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

/*
    Class-level comment. UPDATE BEFORE MERGING.
*/
export default class SizeMenu extends React.Component {
    state = {
        price: this.props.mediumPrice,
    };
    
    render() {
        const { price } = this.state;
        const { mediumPrice } = this.props;
        const PRICE_DIFFERENCE = 2;
        const SMALL_PRICE = mediumPrice - PRICE_DIFFERENCE;
        const LARGE_PRICE = mediumPrice + PRICE_DIFFERENCE;
        const SEPARATOR = " --- $";

        return (
            <Picker
                style={styles.container}
                selectedValue={price}
                onValueChange={(itemValue, itemIndex) => this.setState({price: itemValue})}
            >
                <Picker.Item
                    value={SMALL_PRICE}
                    label={"Small" + SEPARATOR + SMALL_PRICE}
                />
                <Picker.Item
                    label={"Medium" + SEPARATOR + mediumPrice}
                    value={mediumPrice}
                />
                <Picker.Item
                    label={"Large" + SEPARATOR + LARGE_PRICE}
                    value={LARGE_PRICE}
                />
            </Picker>

        );
    }
}

const styles = StyleSheet.create({
   container: {
       height: 50,
       width: 300,
   },
});