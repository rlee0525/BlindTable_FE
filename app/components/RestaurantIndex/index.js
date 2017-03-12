import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

class RestaurantIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>Works</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
