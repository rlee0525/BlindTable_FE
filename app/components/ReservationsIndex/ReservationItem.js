import React from 'react';
import { ScrollView, View, Text, Image, Alert } from 'react-native';

import { SmallButton } from '../common';

class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.details}>
          <Image source={{uri: this.props.res.image}} style={{height: 75, width: 75}}>
          </Image>
          <View style={styles.containerStyle}>

            <View style={styles.infoStyle}>
              <Text style={styles.name}>{this.props.res.name}</Text>
              <Text style={styles.address}>{this.props.res.address}</Text>
              <Text style={styles.city}>{this.props.res.city}, {this.props.res.state}, {this.props.res.postal_code}</Text>
            </View>

          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.itemButton}>
            <SmallButton
              buttonText={'8:00 PM'}
              onPress={() => Alert.alert(
                `Thirsty Bear`,
                `Would you like to make a reservation at Thirsty Bear for 8:00PM?`,
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress: () => console.log('OK Pressed!')},
                ]
              )}
              />
            <SmallButton
              buttonText={'8:15 PM'}
              onPress={() => Alert.alert(
                `Thirsty Bear`,
                `Would you like to make a reservation at Thirsty Bear for 8:15PM?`,
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress: () => console.log('OK Pressed!')},
                ]
              )}
              />
          </View>
          <View style={styles.itemButton}>
            <SmallButton
              buttonText={'8:30 PM'}
              onPress={() => Alert.alert(
                `Thirsty Bear`,
                `Would you like to make a reservation at Thirsty Bear for 8:30PM?`,
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress: () => console.log('OK Pressed!')},
                ]
              )}
              />
            <SmallButton
              buttonText={'8:45 PM'}
              onPress={() => Alert.alert(
                `Thirsty Bear`,
                `Would you like to make a reservation at Thirsty Bear for 8:45PM?`,
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress: () => console.log('OK Pressed!')},
                ]
              )}
              />
          </View>
        </View>
      </View>
    );
  }
}

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
