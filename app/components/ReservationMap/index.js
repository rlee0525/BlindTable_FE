import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView,
         View,
         Text,
         Image,
         Dimensions,
         StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import ReservationItem from '../ReservationsIndex/ReservationItem.js';
import { fetchReservations } from '../../actions/reservations_actions';

const { height, width } = Dimensions.get('window');

class ReservationMap extends React.Component {
  constructor(props) {
    super(props);
  }

  renderReservations() {
    return this.props.reservations.map( res => (
      <ReservationItem res={res} key={res.phone_number}/>
    ));
  }

  render() {
    return (
      <View style={{ position: 'relative', height: 500}}>
        <MapView
          style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

ReservationMap.propTypes = {
  provider: MapView.ProviderPropType,
};

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