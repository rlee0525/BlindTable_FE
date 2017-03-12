import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';

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
      <Image source={require('../../../assets/images/background.png')} style={styles.containerStyle}>
        { this.renderReservations() }
      </Image>
    )
  }
}

const styles = {
  containerStyle: {
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
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
