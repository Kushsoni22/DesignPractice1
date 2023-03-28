/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import { styles } from './style';

export const ButtonSignInLoginIn = (props) => {
  return (
    <View style={styles.signuproot}>
      <TouchableOpacity onPress={() => Alert.alert('hello user')}>
        <Text style={styles.signup}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

