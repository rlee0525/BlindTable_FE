import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = props => (
  <TouchableOpacity style={styles.button}
                      onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.buttonText}
    </Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    marginTop: '10%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    width: "100%"
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial',
    letterSpacing: 0.5
  }
};

export { Button };
