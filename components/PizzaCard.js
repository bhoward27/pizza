import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

/*
    Class-level comment --- MAKE SURE TO UPDATE WHEN DONE
*/
export default class PizzaCard extends React.Component {
    render() {
        const { style, image } = this.props;

        return (
            <View style={style}>
                <Image
                    style={styles.image}
                    source={image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
        backgroundColor: 'grey',
    },
});