import React from 'react';
import { View, Text, Image } from 'react-native';

const RestaurantItem = props => (
  <View style={styles.containerStyle}>
    <Image source={"https://resizer.otstatic.com/v2/photos/small/2.jpg"} />
    <Text>{props.res.name}</Text>
  </View>
);

const styles = {
  constainerStyle: {
    flex: 1,
    // paddingTop: 40
  }
}

export default RestaurantItem;
