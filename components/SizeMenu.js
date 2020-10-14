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
    
    onValueChange = (itemValue, onSizeSelection) => {
        onSizeSelection(itemValue);
        this.setState({ price: itemValue });
    };

    render() {
        const { price } = this.state;
        const { mediumPrice, onSizeSelection } = this.props;
        const PRICE_DIFFERENCE = 2;
        const PRECISION = 2;
        const PRECISION_FACTOR = Math.pow(10, PRECISION);
        const SMALL_PRICE = Math.round((mediumPrice - PRICE_DIFFERENCE) * PRECISION_FACTOR) 
                                    / PRECISION_FACTOR;
        const LARGE_PRICE = Math.round((mediumPrice + PRICE_DIFFERENCE) * PRECISION_FACTOR)
                                    / PRECISION_FACTOR;
        const SEPARATOR = " --- $";

        return (
            <View style={styles.container}>
                <Picker
                    style={styles.container}
                    selectedValue={price}
                    onValueChange={(itemValue, itemIndex) => this.onValueChange(itemValue, onSizeSelection)}
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
            </View>

        );
    }
}

const styles = StyleSheet.create({
   container: {
       
   },
});