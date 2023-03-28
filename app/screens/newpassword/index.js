/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import {Svg} from 'react-native-svg';
import { styles4 } from 'screens';

import {SvgComponent4} from 'theme';
import {SvgComponent5} from 'theme';
import {SvgComponentarrow} from 'theme';
import {SvgComponentLock} from 'theme';
import Icon from 'react-native-vector-icons/EvilIcons';

import {Svgreset, TextInput2, Threelines} from 'components';


const Confirm = ({navigation}) => {
  const SignUpHandler = () => {
    navigation.navigate('signin');
  };

  return (
    <ScrollView style={styles4.root}>
    <View
    style={styles4.root}>
      <Pressable style={styles4.arrow} onPress={() => navigation.goBack()}>
        <Svg width="40" height="20">
          <SvgComponentarrow />
        </Svg>
      </Pressable>
      <View style={styles4.rootHeader}>
      <Threelines name1={<SvgComponent5 />} name2={<SvgComponent5 />} name3={<SvgComponent4 />} />
        <View
          style={styles4.leftScale}>
          <Svgreset name={<SvgComponentLock />} />
        </View>
        <Text style={styles4.HeaderSignup}>Reset Password</Text>

        <View style={styles4.rootTexr}>
          <Text
            style={styles4.Textr}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
          <View style={styles4.holder}>
          <TextInput2 placeh="Enter new password" />

          <TextInput2 placeh="Confirm New Password" />
          </View>
        </View>

        <View style={styles4.signuproot}>
          <TouchableOpacity onPress={SignUpHandler}>
            <View
              style={styles4.Spinner}>
              <Icon name="spinner" size={20} color="white" />
              <Text style={styles4.signup}>Submitting...</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </ScrollView>
  );
};

export default Confirm;
