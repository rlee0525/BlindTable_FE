import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { SmallButton } from '../common/small_button.js';

const RestaurantItem = props => (
    <View style={styles.containerStyle}>
      <View style={styles.infoStyle}>
        <Text>{props.res.name}</Text>
        <Text>{props.res.address}</Text>
        <Text>{props.res.city}, {props.res.state}, {props.res.postal_code}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.itemButton}>
          <SmallButton
            buttonText={'Join'}
            onPress={console.log('joined ress')}
            />
          <SmallButton
            buttonText={'Join'}
            onPress={console.log('joined ress')}
            />
        </View>
        <View style={styles.itemButton}>
          <SmallButton
            buttonText={'Join'}
            onPress={console.log('joined ress')}
            />
          <SmallButton
            buttonText={'Join'}
            onPress={console.log('joined ress')}
            />
        </View>
      </View>
    </View>
);

const styles = {
  containerStyle: {
    backgroundColor: "white",
    elevation: 1,
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    padding: "7%",
    borderBottomWidth: 1,
    borderColor: '#4a4c4f'
  },
  buttonContainer: {

  },
  itemButton: {
    flexDirection: 'row'
  }
};

export default RestaurantItem;
