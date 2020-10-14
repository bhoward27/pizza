import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import CardList from './screens/CardList';
import Order from './screens/Order';

/*
  Displays three Cards, each of which shows a picture of a pizza, its name, and price.
  UPDATE BEFORE MERGING.
*/
export default class App extends React.Component {
  // state = {
  //   showModal: false,
  //   selectedImage: null,
  //   selectedName: null,
  //   selectedPrice: null,
  // };
  state = {
    showModal: false,
  };

  // openOrderScreen = (image, name, price) => {
  //   this.setState({
  //     showModal: true,
  //     selectedImage: image,
  //     selectedName: name,
  //     selectedPrice: price,
  //   });
  // }
  openOrderScreen = () => {
    this.setState({
      showModal: true,
    });
  }

  render() {
    const { showModal } = this.state;
    return (
      // <CardList
      //   style={styles.cardList} onPressCard={this.openOrderScreen}
      // />
      <View style={styles.container}>
        <CardList
          style={styles.cardList} onPressCard={this.openOrderScreen}
        />
        <Modal
          visible={showModal}
          animationType="slide"
        >
          <Order></Order>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Constants.statusBarHeight,
  },
  cardList: {
    flex: 1,
    // backgroundColor: 'white',
    // marginTop: Constants.statusBarHeight,
  },
});
