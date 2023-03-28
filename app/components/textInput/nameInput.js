/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {styles} from './style';
import {color} from 'theme';
import {View, TextInput} from 'react-native';



export const TextInputtext = () => {
    return (
        <View style={styles.placeh}>
        <TextInput placeholder="Name" placeholderTextColor={color.placeholderColor} />
      </View>
    );
};
