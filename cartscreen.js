jsx
// CartScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const CartScreen = ({ navigation }) => {
  const cartItems = [
    { id: '1', name: 'Tomatoes', quantity: 2 },
    { id: '2', name: 'Potatoes', quantity: 1 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name} - {item.quantity} kg</Text>
          </View>
        )}
      />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default CartScreen;
