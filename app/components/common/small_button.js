import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SmallButton = props => (
  <TouchableOpacity style={styles.button}
                      onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.buttonText}
    </Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    marginTop: '7%',
    // alignSelf: 'center',
    height: 30,
    width: 150,
    backgroundColor: '#ed6d72',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20
  },
  buttonText: {
    zIndex: 30,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Arial',
    letterSpacing: 0.5
  }
};

export { SmallButton };
