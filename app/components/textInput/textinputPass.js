/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {styles} from './style';
import {color} from 'theme';
import {View, TextInput, Pressable} from 'react-native';
import {useTogglePasswordVisibility} from '../passwordeye';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TextInput2 = props => {
  const [pass, setpass] = useState('');
  // const [icon, seticon] = useState('eye');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  return (
    <View style={styles.placeh}>
      <TextInput
        placeholder={props.placeh}
        placeholderTextColor={color.placeholderColor}
        secureTextEntry={passwordVisibility}
        value={pass}
        onChangeText={e => setpass(e)}
      />
      <Pressable onPress={handlePasswordVisibility} style={styles.eye}>
        <Icon name={rightIcon} size={22} color={color.placeholderColor} />
      </Pressable>
    </View>
  );
};
