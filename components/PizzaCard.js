import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

/*
    Class-level comment --- MAKE SURE TO UPDATE WHEN DONE
*/
export default class PizzaCard extends React.Component {
    render() {
        //const style = this.props;

        return (
            <View style={styles.container}>
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
        //resizeMode: 'center',
        height: 300,
        width: 300,
        // aspectRatio: 1,
        backgroundColor: 'grey',
    },
    container: {
        //alignItems: 'stretch',
        backgroundColor: 'white',
        alignItems: 'center', //this tells it how to distribute its CHILDREN
    },
});