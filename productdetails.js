### 4. Code for Product Detail Screen

jsx
// ProductDetail.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price: ₹{product.price} per kg</Text>
      <Text style={styles.description}>
        Fresh {product.name} directly from local farmers. Support local agriculture.
      </Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
});

export default ProductDetail;
