import React from 'react';
import { TextInput, View, Text, Platform } from 'react-native';

const SearchInput = ({ label, value, onChangeText, placeholder, secureTextEntry, onSubmitEditing }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize='none'
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={'go'}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    flex: 1,
    fontSize: 15,
    paddingLeft: 20,
    ...Platform.select({
      android: {

      },
    })
  },
  labelStyle: {
    fontSize: 15,
    paddingLeft: 20
  },
  containerStyle: {
    flex: 5,
    ...Platform.select({
      android: {
        height: 50,
      },
      ios: {
        height: 50
      }
    }),
    // width: 250,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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

export { SearchInput };
