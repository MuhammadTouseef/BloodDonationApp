import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const Title = props => {
  return (
    <View style={titlestyles.titleContainer}>
      <Text style={titlestyles.title}>
        {props.title}
      </Text>
    </View>
  );
};

const titlestyles = StyleSheet.create({
  titleContainer: {
    height: 184,

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
  },
});

export default Title;
