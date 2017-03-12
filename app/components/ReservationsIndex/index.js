import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import ReservationItem from './ReservationItem.js';

import { fetchReservations, createReservation } from '../../actions/reservations_actions';

class ReservationsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderReservations = this.renderReservations.bind(this);
  }

  renderReservations() {
    return this.props.reservations.map( res => (
      <ReservationItem
        res={res}
        test={'test'}
        createReservation={this.props.createReservation} />
    ));
  }

  render() {
    return (
      <Image source={require('../../../assets/images/background.png')} style={styles.containerStyle}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.backText}
            onPress={Actions.home}>{"< Back"}</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
            { this.renderReservations() }
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.switchView}
                          onPress={Actions.reservationMap}>
          <Text style={styles.viewText}>{"Map View"}</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const styles = {
  back: {
    height: "10%",
    width: "100%",
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingTop: 5
  },
  backText: {
    fontSize: 18,
    fontWeight: '500',
    color: "white"
  },
  containerStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignSelf: 'center',
    width: "100%"
  },
  switchView: {
    width: "100%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
)(ReservationsIndex);
