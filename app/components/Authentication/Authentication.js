import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from "../common";

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authyId: ""
    };
  }

  onAuthPressed() {
    const user = {
      phone_number: this.props.phone_number,
      authy_id: this.state.authyId
    };

    this.props.authenticateUser(user)
      .then(response => {
        if (response.responseData.session_token) {
          let phone_number = response.responseData.phone_number;
          let authy_id = response.responseData.authy_id;
          AsyncStorage.setItem('phone_number', (phone_number))
            .then(() => AsyncStorage.setItem('authy_id', (authy_id)))
            .then(() => Actions.home({ currentUser: response.responseData }));
        } else {
          this.setState({
            errors: response.responseData
          });
        }
      });
  }

  render() {
    return (
      <Image source={require('../../../assets/images/background.png')} style={styles.container}>
        <View style={styles.viewContainer}>
          <ScrollView keyboardShouldPersistTaps='never'>
            <Text style={styles.inputTitle}>VERIFICATION CODE</Text>
            <View style={styles.textBox}>
              <TextInput
                onChangeText={(authyId) => this.setState({ authyId })}
                style={styles.input} autoFocus={true}
                />
            </View>


            <TouchableOpacity style={styles.button}
                                onPress={this.onAuthPressed.bind(this)}>
              <Text style={styles.buttonText}>
                Submit
              </Text>
            </TouchableOpacity>

            <Text style={styles.errors}>
              {this.state.errors ? this.state.errors.join("\n") : ""}
            </Text>
          </ScrollView>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: "7%",
  },
  inputTitle: {
    color: 'white',
    marginTop: "10%",
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textBox: {
    borderBottomWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
    marginLeft: '35%',
    marginRight: '35%',
    marginTop: '5%',
  },
  input: {
    flex: 0.85,
    marginTop: 10,
    alignSelf: 'stretch',
    height: 30,
    fontSize: 15,
    fontFamily: 'Arial',
    color: 'white',
  },
  errors: {
    fontSize: 11,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
    fontFamily: 'Arial'
  },
  button: {
    marginTop: '12%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    width: "35%"
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial',
    letterSpacing: 0.5
  }
});

export default Authentication;
