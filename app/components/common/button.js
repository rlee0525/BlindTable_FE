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
    marginTop: '10%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Arial'
  }
};

export { Button };
