import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import PizzaCard from './components/PizzaCard';

/*
  Class-level comment. Update at the end.
*/
export default function App() {
  return (
    <View style={styles.container}>
      <PizzaCard/>
    </View>
  );
}
const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
  pizzacard: {
    flex: 1,
    marginTop:(Platform.OS === 'android' || platformVersion < 11) ? Constants.statusBarHeight : 0,
  },
});
