// src/components/Cart.js
import React from 'react';
import { View, Text, Button, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeFromCart, clearCart, addToCart } from './../redux/reducer/cartSlice';

export default function Cart() {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    console.log(cart);

    const addItemToCart = (item) => {
        dispatch(addToCart(item));
    }

    const removeItemFromCart = (item) =>{
        dispatch(removeFromCart(item));
    }

    const data = [{ id: 1, name: 'Chocolate' }, { id: 2, name: 'Biscute' }, { id: 3, name: 'Ice Cream' }]

    return (


        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', marginVertical: 10, fontSize: 20, color: 'red' }}>Redux System Cart</Text>
            {data.map((item, id) => (
                <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={{ color: 'red' }}>{item.name}</Text>
                    {cart.some((value)=> value.id == item.id)?
                    (
                        <TouchableOpacity
                        onPress={() => { removeItemFromCart(item) }}
                        style={{ borderWidth: 1, margin: 5, padding: 10 }}>
                        <Text>Remove From Cart</Text>
                    </TouchableOpacity>
                    ):(
                        <TouchableOpacity
                        onPress={() => { addItemToCart(item) }}
                        style={{ borderWidth: 1, margin: 5, padding: 10 }}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>
                    )
                    }
                </View>
            ))}


        </SafeAreaView>
    );
}
