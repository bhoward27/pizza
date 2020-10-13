import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import PizzaCard from './components/PizzaCard';
import pepperoniImage from './assets/pepperoni.jpg';

/*
  Class-level comment. Update at the end.
*/
export default function App() {
  return (
    <View style={styles.container}>
      <PizzaCard
        style={styles.pizzaCard}
        image={pepperoniImage}
        name="Pepperoni Pizza"
        price="$15.99" //price of a medium pizza.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
  pizzaCard: {
    backgroundColor: 'white',

    //  This tells it how to distribute its CHILDREN along (in this case) the x-axis 
    //  (secondary axis).
    alignItems: 'center',
},
});
