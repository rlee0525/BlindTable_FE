import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchReservations } from '../../actions/reservations_actions';

import { SearchInput } from '../common';
import { Button } from "../common";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "08",
      ampm: "pm"
    };
  }

  onButtonPress() {
    this.props.fetchReservations()
    .then(Actions.reservationIndex());
  }

  render() {
    return (
      <Image source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}>

        <View style={styles.container}>
          <View style={styles.headerStyle}>
            <Text style={styles.textHeader}>PICK A TIME</Text>
          </View>
          <View style={styles.pickerStyle}>
            <Picker
              style={styles.individualPicker}
              selectedValue={this.state.hour}
              onValueChange={ hr => this.setState({hour: hr})}>
              <Picker.Item color="white" label="01" value="01" />
              <Picker.Item color="white" label="02" value="02" />
              <Picker.Item color="white" label="03" value="03" />
              <Picker.Item color="white" label="04" value="04" />
              <Picker.Item color="white" label="05" value="05" />
              <Picker.Item color="white" label="06" value="06" />
              <Picker.Item color="white" label="07" value="07" />
              <Picker.Item color="white" label="08" value="08" />
              <Picker.Item color="white" label="09" value="09" />
              <Picker.Item color="white" label="11" value="11" />
              <Picker.Item color="white" label="12" value="12" />
            </Picker>

            <Picker
              style={styles.individualPicker}
              selectedValue={this.state.ampm}
              onValueChange={ m => this.setState({ampm: m})}>
              <Picker.Item color="white" label="AM" value="am" />
              <Picker.Item color="white" label="PM" value="pm" />
            </Picker>
          </View>
          <Button buttonText="Find Reservations" onPress={this.onButtonPress.bind(this)}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: "20%",
    marginBottom: "10%",
    height: 50,
    width: 50,
  },
  welcomeText: {
    fontFamily: "Arial",
    fontSize: 25,
    color: "white",
    letterSpacing: 1,
    marginBottom: "15%"
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: "7%"
  },
  pickerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  individualPicker: {
    width: "40%"
  },
  headerStyle: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textHeader: {
    fontFamily: "ArialMT",
    fontWeight: '500',
    fontSize: 15,
    color: "white",
    marginBottom: "10%"
  },
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchReservations: query => dispatch(fetchReservations(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
