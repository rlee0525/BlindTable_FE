import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const SmallButton = props => (
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
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    width: "5%"
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
    fontFamily: 'Arial',
    letterSpacing: 0.5
  }
};

export { SmallButton };
