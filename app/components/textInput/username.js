/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {styles} from './style';
import {color} from 'theme';
import {View, TextInput} from 'react-native';


export const TextInput1 = () => {
  const [user, setuser] = useState('');
  return (
    <View style={styles.placeh}>
      <TextInput
        placeholder="Email/Phone Number"
        placeholderTextColor={color.placeholderColor}
        keyboardType="email-address"
        value={user}
        onChangeText={e => setuser(e)}
      />
    </View>
  );
};
