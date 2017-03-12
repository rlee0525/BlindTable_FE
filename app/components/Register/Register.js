import React from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';

import { Button } from "../common";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      country_code: "1",
      phone_number: "",
      image_url: "image_url",
      description: "description",
      errors: []
    };
  }

  onRegisterPressed() {
    let first_name = this.state.first_name;
    let last_name = this.state.last_name;
    let phoneNumber = this.refs['phoneNum'].getRawValue();
    let user = {
      first_name,
      last_name,
      phone_number: phoneNumber,
      image_url: "image_url",
      description: "description",
    };

    this.props.registerUser(user)
      .then(response => {
        if (response.responseData.session_token) {
          let phone_number = response.responseData.phone_number;
          let currentUser = response.responseData;
          return Actions.authentication({ currentUser, phone_number });
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
        <View style={styles.container}>
          <ScrollView keyboardShouldPersistTaps='never'>
            <Image source={require('../../../assets/images/logo.png')}
                   style={styles.logo}/>
            <Text style={styles.welcomeText}>Welcome to BlindTable</Text>
            <Text style={styles.inputTitle}>FIRST NAME</Text>
            <View style={styles.textBox}>
              <TextInput
                onChangeText={(first_name) => this.setState({ first_name })}
                style={styles.input} autoFocus={true} autoCapitalize="words" />
            </View>
            <Text style={styles.inputTitle}>LAST NAME</Text>
            <View style={styles.textBox}>
              <TextInput
                onChangeText={(last_name) => this.setState({ last_name })}
                style={styles.input} autoFocus={false} autoCapitalize="words" />
            </View>

            <Text style={styles.inputTitle}>PHONE NUMBER</Text>
            <View style={styles.textBox}>
              <TextInputMask
                onChangeText={(phone_number) => this.setState({ phone_number })}
                style={styles.input} value={this.state.phone_number} type={'cel-phone'}
                options={{dddMask: '(999) 999-9999'}} ref={'phoneNum'}
              />
            </View>

            <Button buttonText="Submit" onPress={this.onRegisterPressed.bind(this)} />

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
    padding: "7%"
  },
  welcomeText: {
    fontFamily: "Arial",
    fontSize: 25,
    color: "white",
    letterSpacing: 1,
    marginBottom: "10%"
  },
  inputTitle: {
    color: 'white',
    marginTop: "10%",
    fontSize: 13,
    fontWeight: 'bold',
  },
  logo: {
    marginTop: "20%",
    marginBottom: "10%",
    height: 50,
    width: 50,
  },
  textBox: {
    borderBottomWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
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
    fontSize: 10,
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
    fontFamily: 'Arial'
  }
});

export default Register;
