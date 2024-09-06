jsx
// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  // Mock API to fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Ideally, this will be a real API
    setProducts([
      { id: '1', name: 'Tomatoes', price: '20' },
      { id: '2', name: 'Potatoes', price: '15' },
      { id: '3', name: 'Carrots', price: '10' },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Price: ₹{item.price} per kg</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productItem: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default HomeScreen;


