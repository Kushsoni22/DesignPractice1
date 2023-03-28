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
import { styles } from './style';

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
    <ScrollView style={styles.root}>
    <View
    style={styles.root}>
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Svg width="40" height="20">
          <SvgComponentarrow />
        </Svg>
      </Pressable>
      <View style={styles.rootHeader}>
      <Threelines name1={<SvgComponent5 />} name2={<SvgComponent5 />} name3={<SvgComponent4 />} />
        <View
          style={styles.leftScale}>
          <Svgreset name={<SvgComponentLock />} />
        </View>
        <Text style={styles.HeaderSignup}>Reset Password</Text>

        <View style={styles.rootTexr}>
          <Text
            style={styles.Textr}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
          <View style={styles.holder}>
          <TextInput2 placeh="Enter new password" />

          <TextInput2 placeh="Confirm New Password" />
          </View>
        </View>

        <View style={styles.signuproot}>
          <TouchableOpacity onPress={SignUpHandler}>
            <View
              style={styles.Spinner}>
              <Icon name="spinner" size={20} color="white" />
              <Text style={styles.signup}>Submitting...</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
    </ScrollView>
  );
};

export default Confirm;
