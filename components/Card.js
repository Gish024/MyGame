import { StyleSheet, View } from 'react-native';

import React from 'react';
import colors from '../constants/colors';

const Card = ({ children, newStyles }) => {
  return (
  <View style={{ ...styles.inputContainer, ...newStyles }}>{children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});