import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { SearchInput } from '../common';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "12",
      ampm: "pm"
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.textHeader}>Pick a Time</Text>
        </View>
        <View style={styles.pickerStyle}>
          <Picker
            style={styles.individualPicker}
            selectedValue={this.state.hour}
            onValueChange={ hr => this.setState({hour: hr})}>
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>

          <Picker
            style={styles.individualPicker}
            selectedValue={this.state.ampm}
            onValueChange={ m => this.setState({ampm: m})}>
            <Picker.Item label="AM" value="am" />
            <Picker.Item label="PM" value="pm" />
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerStyle: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  individualPicker: {
    width: "40%"
  },
  headerStyle: {
    width: "100%",
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  textHeader: {
    textAlign: "center",
  }
});


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
