import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { SmallButton } from '../common';

const RestaurantItem = props => (
  <View style={styles.container}>
    <View style={styles.details}>
      <Image source={require('../../../assets/images/sample.jpg')} style={{height: 75, width: 75}}>
      </Image>
      <View style={styles.containerStyle}>

        <View style={styles.infoStyle}>
          <Text style={styles.name}>{props.res.name}</Text>
          <Text style={styles.address}>{props.res.address}</Text>
          <Text style={styles.city}>{props.res.city}, {props.res.state}, {props.res.postal_code}</Text>
        </View>

      </View>
    </View>
    <View style={styles.buttonContainer}>
      <View style={styles.itemButton}>
        <SmallButton
          buttonText={'8:00 PM'}
          onPress={() => console.log('joined ress')}
          />
        <SmallButton
          buttonText={'8:15 PM'}
          onPress={() => console.log('joined ress')}
          />
      </View>
      <View style={styles.itemButton}>
        <SmallButton
          buttonText={'8:30 PM'}
          onPress={() => console.log('joined ress')}
          />
        <SmallButton
          buttonText={'8:45 PM'}
          onPress={() => console.log('joined ress')}
          />
      </View>
    </View>
  </View>
);

const styles = {
  details: {
    width: "100%",
    flexDirection: "row"
  },
  container: {
    width: "100%",
    flexDirection: "column",
    padding: "7%",
    borderBottomWidth: 1,
    borderColor: '#4a4c4f',
  },
  containerStyle: {
    elevation: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: "7%"
  },
  itemButton: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202021'
  },
  address: {
    color: '#343435'
  },
  city: {
    color: '#343435'
  }
};

export default RestaurantItem;
