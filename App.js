import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import CardList from './screens/CardList';

/*
  Displays three Cards, each of which shows a picture of a pizza, its name, and price.
  UPDATE BEFORE MERGING.
*/
export default function App() {
  return (
    <CardList
      style={styles.cardList}
    />
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
});
