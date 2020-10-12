import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

/*
    Class-level comment --- MAKE SURE TO UPDATE WHEN DONE
*/
export default class PizzaCard extends React.Component {
    render() {
        const style = this.props;

        return (
            <View style={style}>
                <Image
                    style={styles.image} 
                    source={require('../assets/pepperoni.jpg')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
    // container: {
    //     alignItems: 'stretch',
    // },
});