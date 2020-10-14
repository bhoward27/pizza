import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import CardList from './screens/CardList';
import Order from './screens/Order';

/*
  The app starts with the CardList screen, which shows a list of pizzas. Tapping on a pizza
  opens the Order screen, where the user can choose the size of the pizza they want and then
  place an order for delivery. This component manages all the logic between these screens.
*/
export default class App extends React.Component {
  state = {
    showModal: false,
    selectedImage: null,
    selectedName: null,
    selectedPrice: null,
    selectedSize: null,
  };

  openOrderScreen = (image, name, price) => {
    this.setState({
      showModal: true,
      selectedImage: image,
      selectedName: name,
      selectedPrice: price,
      selectedSize: price,
    });
  };

  closeOrderScreen = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
      selectedName: null,
      selectedPrice: null,
      selectedSize: null,
    });
  };

  selectSize = (itemValue) => {
    this.setState({selectedSize: itemValue})
  };

  render() {
    const { showModal, selectedImage, selectedName, selectedPrice, selectedSize } = this.state;
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
            size={selectedSize}
            onOpenOrder={this.initializeTotalRow}
            onPressClose={this.closeOrderScreen}
            onSizeSelection={this.selectSize}
          />
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
  },
  order: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
},
});
