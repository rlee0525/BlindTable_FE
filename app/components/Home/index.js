import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Navbar from '../Navbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  logo: {
    left: 12,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 120,
    marginBottom: 140
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  input: {
    marginTop: 10,
    alignSelf: 'stretch',
    height: 50,
    fontSize: 15,
    fontFamily: 'Arial',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: 45,
    height: 50,
    backgroundColor: '#0091EA',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  },
  errors: {
    fontSize: 11,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
    fontFamily: 'Arial'
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
