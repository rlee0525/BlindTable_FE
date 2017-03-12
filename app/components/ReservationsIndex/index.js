import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View, Text, Image } from 'react-native';

import ReservationItem from './ReservationItem.js';

import { fetchReservations } from '../../actions/reservations_actions';

class ReservationsIndex extends React.Component {
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
      <Image source={require('../../../assets/images/background.png')} style={styles.containerStyle}>
        <ScrollView style={styles.container}>
          { this.renderReservations() }
        </ScrollView>
      </Image>
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
)(ReservationsIndex);
