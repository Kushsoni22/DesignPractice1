/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from './style';
export const ButtonSubmit = props => {
  return (
    <View style={styles.signuproot}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.signup}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
