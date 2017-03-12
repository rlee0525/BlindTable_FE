import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { SearchInput } from '../common';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "12",
      ampm: "pm"
    };
  }


  render() {
    return (
      <Image source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.headerStyle}>
            <Text style={styles.textHeader}>Pick a time</Text>
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
    justifyContent: 'center',
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
    color: "white"
  }
});


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
