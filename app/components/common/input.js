import React from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          autoCapitalize='none'
          style={inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    flex: 2
  },
  labelStyle: {
    fontSize: 15,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 50,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  }
};

export { Input };
