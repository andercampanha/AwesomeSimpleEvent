// @flow strict-local

import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import Colors from '../../../utils/Colors';
import {HEADER_LOGO} from '../../../utils/Assets';

const Header: () => React$Node = () => {
  return (
    <ImageBackground
      testID="header-image"
      accessibilityRole={'image'}
      source={HEADER_LOGO}
      style={styles.background}
      imageStyle={styles.logo}>
      <Text style={styles.text}>Welcome to our Awesome event</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    height: 1000,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
