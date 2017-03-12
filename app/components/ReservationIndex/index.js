import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import RestaurantItem from './RestaurantItem.js';

import { fetchReservations } from '../../actions/reservations_actions';

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {

  }

  renderReservationss() {
    return this.props.reservations.map( rest => (
      <View>
        <Text>{rest.name}</Text>
      </View>
    ))
  }

  render() {
    return (
      <View>
        { this.renderReservationss() }
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
