// src/components/Cart.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addItem,
  removeFromCart,
  clearCart,
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from './../redux/reducer/cartSlice';
import navigation from '../route/navigation';

export default function Cart({navigation}) {
  const [count, setCount] = useState(0);
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  console.log(cart);

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };

  const IncreaseQuantity = item => {
    dispatch(incrementQuantity(item));
  };

  const DecreseQuantity = item => {
    dispatch(decrementQuantity(item));
  };

  const data = [
    {id: 1, name: 'Chocolate', price: 500},
    {id: 2, name: 'Biscute', price: 500},
    {id: 3, name: 'Ice Cream', price: 500},
  ];

  NetTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: 10,
          fontSize: 20,
          color: 'red',
        }}>
        Redux System Cart
      </Text>
      {data.map((item, id) => (
        <View
          key={item.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{color: 'red'}}>{item.name}</Text>
          <Text style={{color: 'red'}}>{item.quantity}</Text>
          {cart.some(value => value.id == item.id) ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  removeItemFromCart(item);
                }}
                style={{borderWidth: 1, margin: 5, padding: 10}}>
                <Text>Remove From Cart</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                addItemToCart(item);
              }}
              style={{borderWidth: 1, margin: 5, padding: 10}}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <Button title="Details" onPress={() => navigation.navigate('Details')} />

      {cart.map((item, id) => (
        <View
          key={item.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 10,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'blue'}}
            onPress={() => IncreaseQuantity(item)}>
            <Text>Increment</Text>
          </TouchableOpacity>
          <Text style={{color: 'red'}}>
            {item.quantity} {item.name}
          </Text>
          <TouchableOpacity
            style={{backgroundColor: 'red'}}
            onPress={() => DecreseQuantity(item)}>
            <Text>Decriment</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.container}>
        {cart.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Total: {item.price * item.quantity}</Text>
          </View>
        ))}
        <Text style={{color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>
          Net-Toal: {NetTotal}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  totalBillText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
