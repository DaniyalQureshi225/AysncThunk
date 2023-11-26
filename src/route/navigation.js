import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../Component/Cart';
import details from '../Component/details';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function navigation() {
  const cart = useSelector(state => state.cart.items);
  return (
    <NavigationContainer>
      {cart.length <= 20 ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Cart} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Details" component={details} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
