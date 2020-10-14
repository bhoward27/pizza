import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import CardList from './screens/CardList';
import Order from './screens/Order';
import SizeMenu from './components/SizeMenu';

/*
  Displays three Cards, each of which shows a picture of a pizza, its name, and price.
  UPDATE BEFORE MERGING.
*/
export default class App extends React.Component {
  state = {
    showModal: false,
    selectedImage: null,
    selectedName: null,
    selectedPrice: null,
  };

  openOrderScreen = (image, name, price) => {
    this.setState({
      showModal: true,
      selectedImage: image,
      selectedName: name,
      selectedPrice: price,
    });
  };
  closeOrderScreen = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
      selectedName: null,
      selectedPrice: null,
    });
  };

  render() {
    const { showModal, selectedImage, selectedName, selectedPrice } = this.state;
    return (
      <View style={styles.container}>
        <CardList
          style={styles.cardList} onPressCard={this.openOrderScreen}
        />
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeOrderScreen}
        >
          <Order 
            style={styles.order}
            name={selectedName}
            image={selectedImage}
            price={selectedPrice}
            onPressClose={this.closeOrderScreen}
          ></Order>
        </Modal>
        {/* <SizeMenu mediumPrice={9.99} ></SizeMenu> */}
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
  },
  order: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
},
});
