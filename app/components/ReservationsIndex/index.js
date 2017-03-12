import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import ReservationItem from './ReservationItem.js';

import { fetchReservations } from '../../actions/reservations_actions';

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderReservations() {
    return this.props.reservations.map( res => (
      <ReservationItem res={res} key={res.phone_number}/>
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderReservations() }
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 40
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
