import React from 'react';
import { PTextInput, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { SearchInput } from '../common';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // renderBackButton() {
  //   if (this.props.backAction) {
  //     return (
  //       <BackButton buttonAction={this.props.backAction} />
  //     );
  //   }
  // }

  handleSubmit(e) {
    this.props.receiveQuery(this.state.query);
    Actions.searchResults();
  }

  //{ Platform.select({ ios: this.renderBackButton() }) }

  render() {
    return (
      <View style={ styles.header }>
        <SearchInput
           placeholder="What're you feeling?"
           onChangeText={ query => this.setState({ query }) }
           onSubmitEditing={ this.handleSubmit }
        />
      </View>
    );
  }
}

const styles = {
  header: {
    ...Platform.select({
      android: {
        paddingTop: 60,
      },
      ios: {
        paddingTop: 40,
      }
    }),
    height: 80,
    width: "100%",
    paddingBottom: 25,
    paddingRight: 25,
    paddingLeft: 25,
    // backgroundColor: '#F8F8F8',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    width: "90%"
  }
};

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
