import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView,
         View,
         Text,
         Image,
         Dimensions,
         StyleSheet,
         TouchableOpacity,
         Alert } from 'react-native';
import MapView from 'react-native-maps';
import ReservationItem from '../ReservationsIndex/ReservationItem.js';
import { fetchReservations } from '../../actions/reservations_actions';
import { SmallButton } from '../common';

const { height, width } = Dimensions.get('window');

class ReservationMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: null,
      selectedId: null
    };

    this.handleMarkerPress = this.handleMarkerPress.bind(this);
  }

  componentDidMount() {
    let restaurants = this.props.reservations.map( e => {
      return {
        id: e['rid'],
        name: e['name'],
        latlng: {
          latitude: parseFloat(e['latitude']),
          longitude: parseFloat(e['longitude'])
        }
      };
    });

    this.setState({
      markers: restaurants
    });
  }

  handleMarkerPress(id) {
    this.setState({
      selectedId: id
    });
  }

  renderReservation() {
    let res;
    if (this.state.selectedId === null) {
      res = this.props.reservations[0];
    } else {
      res = this.props.reservations.filter((rez) => { return rez.rid === this.state.selectedId; })[0];
    }
    // return <ReservationItem res={res} key={res.phone_number}/>;
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <Image source={{uri: res.image}} style={{height: 75, width: 75}}>
          </Image>
          <View style={styles.containerStyle}>

            <View style={styles.infoStyle}>
              <Text style={styles.name}>{res.name}</Text>
              <Text style={styles.address}>{res.address}</Text>
              <Text style={styles.city}>{res.city}, {res.state}, {res.postal_code}</Text>
            </View>

          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.itemButton}>
            <SmallButton
              buttonText={'8:00 PM'}
              onPress={() => Alert.alert(
                `${res.name}`,
                `Would you like to make a reservation at ${res.name} for 8:00PM?`,
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress: () => console.log('OK Pressed!')},
                ]
              )}
              />
            <SmallButton
              buttonText={'8:15 PM'}
              onPress={() => Alert.alert(
                `${res.name}`,
                `Would you like to make a reservation at ${res.name} for 8:15PM?`,
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
                `${res.name}`,
                `Would you like to make a reservation at ${res.name} for 8:30PM?`,
                [
                  {text: 'No', onPress: () => console.log('Cancel Pressed!')},
                  {text: 'Yes', onPress: () => console.log('OK Pressed!')},
                ]
              )}
              />
            <SmallButton
              buttonText={'8:45 PM'}
              onPress={() => Alert.alert(
                `${res.name}`,
                `Would you like to make a reservation at ${res.name} for 8:45PM?`,
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

  render() {
    let initialRestaurant = this.props.reservations[0];
    let latitude = parseFloat(initialRestaurant.latitude);
    let longitude = parseFloat(initialRestaurant.longitude);

    return (
      <ScrollView style={{ height: 385}}>
        <MapView
          style={{ height: 385 }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.markers && this.state.markers.map(marker => {
            return (
              <MapView.Marker
                title={marker.name}
                key={marker.id}
                coordinate={marker.latlng}
                onSelect={() => {this.setState({selectedId: marker.id});}}
              />
            );
          })}
        </MapView>
        <View style={styles.detailContainer}>
          { this.renderReservation() }
        </View>
        <TouchableOpacity style={styles.switchView}
                          onPress={Actions.reservationIndex}>
          <Text style={styles.viewText}>{"List View"}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: width,
    height: height,
  },
  detailContainer: {
    alignSelf: 'center',
    width: "100%"
  },
  switchView: {
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed6d72',
  },
  viewText: {
    fontSize: 16,
    color: 'white'
  }, //
  details: {
    width: "100%",
    flexDirection: "row"
  },
  container: {
    width: "100%",
    flexDirection: "column",
    padding: "7%",
    borderColor: '#4a4c4f',
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

const mapStateToProps = ({reservations}) => ({
  reservations
});

const mapDispatchToProps = dispatch => ({
  fetchReservations: query => dispatch(fetchReservations(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationMap);
