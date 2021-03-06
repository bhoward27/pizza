import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Card from '../components/Card';
import pepperoniImage from '../assets/pepperoni.jpg';
import hawaiianImage from '../assets/hawaiian.jpg';
import mediterraneanImage from '../assets/mediterranean.jpg';

/*
  This is the first screen of the app, and it shows 3 Cards in a ScrollView for the following 
  pizzas: Hawaiian, Pepperoni, and Mediterannean.
*/
export default function CardList({ style, onPressCard }) {
    const HAWAIIAN_NAME = "Hawaiian Pizza";
    const HAWAIIAN_PRICE = 15.99;
    const PEPPERONI_NAME = "Pepperoni Pizza";
    const PEPPERONI_PRICE = 15.99;
    const MEDITERRANEAN_NAME = "Mediterranean Pizza"
    const MEDITERRANEAN_PRICE = 18.99;

    return (
        <ScrollView style={style}>
            <Card
                syle={styles.card}
                image={hawaiianImage}
                name={HAWAIIAN_NAME}
                price={HAWAIIAN_PRICE}
                onPressCard={() => onPressCard(hawaiianImage, HAWAIIAN_NAME, HAWAIIAN_PRICE)}
            />
            <Card
                style={styles.card}
                image={pepperoniImage}
                name={PEPPERONI_NAME}
                price={PEPPERONI_PRICE}
                onPressCard={() => onPressCard(pepperoniImage, PEPPERONI_NAME, PEPPERONI_PRICE)}
            />
            <Card
                syle={styles.card}
                image={mediterraneanImage}
                name={MEDITERRANEAN_NAME}
                price={MEDITERRANEAN_PRICE}
                onPressCard={() => onPressCard(mediterraneanImage, MEDITERRANEAN_NAME,
                                                                        MEDITERRANEAN_PRICE)}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
