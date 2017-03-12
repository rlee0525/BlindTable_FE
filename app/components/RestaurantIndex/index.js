import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

import RestaurantItem from './RestaurantItem.js';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRestaurants() {
    this.props.restaurants.map( rest => (
      <View>
        <Text>rest.name</Text>
      </View>
    ))
  }

  render() {
    return (
      <View>
        { this.renderRestaurants() }
      </View>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({
  restaurants
})

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
