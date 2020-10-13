import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import Card from './components/Card';
import pepperoniImage from './assets/pepperoni.jpg';
import hawaiianImage from './assets/hawaiian.jpg';
import mediterraneanImage from './assets/mediterranean.jpg';

/*
  Currently, App displays just a lone Card of a pepperoni pizza. UPDATE BEFORE MERGING.
*/
export default function App() {
  return (
    <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
  card: {
    backgroundColor: 'white',

    //  This tells it how to distribute its CHILDREN along (in this case) the x-axis 
    //  (secondary axis).
    alignItems: 'center',
  },
});
