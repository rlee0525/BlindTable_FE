import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import ReservationItem from './ReservationItem.js';

import { fetchReservations } from '../../actions/reservations_actions';

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {

  }

  renderReservations() {
    return this.props.reservations.map( rest => (
      <View key={rest.phone_number}>
        <Text>{rest.name}</Text>
        <Text>{rest.address}</Text>
        
      </View>
    ))
  }

  render() {
    return (
      <View>
        { this.renderReservations() }
      </View>
    )
  }
}

const mapStateToProps = ({reservations}) => ({
  reservations
})

const mapDispatchToProps = dispatch => ({
  fetchReservations: query => dispatch(fetchReservations(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsIndex);
