import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Card from '../components/Card';
import pepperoniImage from '../assets/pepperoni.jpg';
import hawaiianImage from '../assets/hawaiian.jpg';
import mediterraneanImage from '../assets/mediterranean.jpg';

/*
  Class-level comment
  UPDATE BEFORE MERGING.
*/
export default class CardList extends React.Component {
    render() {
        const { style } = this.props;
        return (
            <ScrollView style={style}>
                <Card
                    syle={styles.card}
                    image={hawaiianImage}
                    name="Hawaiian Pizza"
                    price="$15.99"
                />
                <Card
                    style={styles.card}
                    image={pepperoniImage}
                    name="Pepperoni Pizza"
                    price="$15.99" //price of a medium pizza.
                />
                <Card
                    syle={styles.card}
                    image={mediterraneanImage}
                    name="Mediterranean Pizza"
                    price="$18.99"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',

    //  This tells it how to distribute its CHILDREN along (in this case) the x-axis 
    //  (secondary axis).
    alignItems: 'center',
  },
});
