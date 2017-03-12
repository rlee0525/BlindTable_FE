import React from 'react';
import { View, Text, Image } from 'react-native';

import { Button } from '../common';

const RestaurantItem = props => (
  <View style={styles.containerStyle}>
    <View style={styles.infoStyle}>
      <Text>{props.res.name}</Text>
      <Text>{props.res.address}</Text>
      <Text>{props.res.city}, {props.res.state}, {props.res.postal_code}</Text>
    </View>
    <View style={styles.buttonStyle}>
      <Button
        buttonText={'Join'}
        onPress={console.log('joined ress')}
        />
    </View>
  </View>
);

const styles = {
  containerStyle: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: "90%",
    flexDirection: 'row',
    
  }
};

export default RestaurantItem;
