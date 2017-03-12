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
import { fetchReservations, createReservation } from '../../actions/reservations_actions';
import { SmallButton } from '../common';

const { height, width } = Dimensions.get('window');
const earthRadiusInKM = 6371;
const radiusInKM = 3;
const aspectRatio = 1;

class ReservationMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: null,
      selectedId: null,
      buttonOne: false,
      buttonTwo: false,
      buttonThree: false,
      buttonFour: false
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

  deg2rad (angle) {
    return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
  }

  rad2deg (angle) {
    return angle * 57.29577951308232; // angle / Math.PI * 180
  }

  renderReservation() {
    let res;
    if (this.state.selectedId === null) {
      res = this.props.reservations[0];
    } else {
      res = this.props.reservations.filter((rez) => { return rez.rid === this.state.selectedId; })[0];
    }
    return <ReservationItem res={res} key={res.phone_number} createReservation={this.props.createReservation}/>;
  }

  render() {
    let initialRestaurant = this.props.reservations[0];
    let latitude = parseFloat(initialRestaurant.latitude);
    let longitude = parseFloat(initialRestaurant.longitude);

    let radiusInRad = radiusInKM / earthRadiusInKM;
    let longitudeDelta = this.rad2deg(radiusInRad / Math.cos(this.deg2rad(latitude)));
    let latitudeDelta = aspectRatio * this.rad2deg(radiusInRad);

    return (
      <ScrollView style={{ height: 385}}>
        <MapView
          style={{ height: 385 }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
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
  },
};

const mapStateToProps = ({reservations}) => ({
  reservations
});

const mapDispatchToProps = dispatch => ({
  fetchReservations: query => dispatch(fetchReservations(query)),
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationMap);
