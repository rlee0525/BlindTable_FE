import React from 'react';
import { View, Text } from 'react-native';

const RestaurantItem = props => (
  <View>
    <Text>{props.name}</Text>
  </View>
);

export default RestaurantItem;
