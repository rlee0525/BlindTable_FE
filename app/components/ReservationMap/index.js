import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView,
         View,
         Text,
         Image,
         Dimensions,
         StyleSheet,
         TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import ReservationItem from '../ReservationsIndex/ReservationItem.js';
import { fetchReservations, createReservation } from '../../actions/reservations_actions';

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
          latitude: parseInt(e['latitude']),
          longitude: parseInt(e['longitude'])
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
    return <ReservationItem res={res} key={res.phone_number} createReservation={this.props.createReservation}/>;
  }

  render() {
    let initialRestaurant = this.props.reservations[0];
    let latitude = parseInt(initialRestaurant.latitude);
    let longitude = parseInt(initialRestaurant.longitude);

    console.log(this.props);
    console.log(this.state);
    return (
      <ScrollView style={{ height: 384}}>
        <MapView
          style={{ height: 384 }}
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
  }
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
