import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const Button = props => (
  <TouchableHighlight style={styles.button}
                      onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.buttonText}
    </Text>
  </TouchableHighlight>
);

const styles = {
  button: {
    marginTop: 130,
    height: 50,
    backgroundColor: '#E53935',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  }
}

export { Button };
