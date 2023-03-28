/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import {Svg} from 'react-native-svg';
import {SvgComponent2} from 'theme';
import {SvgComponent4} from 'theme';
import {SvgComponent5} from 'theme';
import {SvgComponentarrow} from 'theme';
import { styles } from './style';
import { ButtonSubmit } from 'components';
import { SvgLock, Threelines } from 'components';

const Otp = ({navigation}) => {
  const SignInHandler = () => {
    navigation.goBack();
  };

  const SignUpHandler = () => {
    navigation.navigate('conf');
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
      <Threelines name1={<SvgComponent5 />} name2={<SvgComponent4 />} name3={<SvgComponent5 />} />
        </View>
        <View style={styles.leftScale}>
          <SvgLock name={<SvgComponent2 />} />
        </View>
        <Text style={styles.HeaderSignup}>Enter OTP</Text>

        <View>
          <Text
            style={styles.OtpScale}>
            Enter the OTP code we just sent<Text>{'\n'}</Text>
            you on your registered Email/Phone number
          </Text>
        </View>
        <View style={styles.rootRectOtp}>
          <View style={styles.innerOtp1}>
            <TextInput />
          </View>
          <View style={styles.innerOtp}>
            <TextInput />
          </View>
          <View style={styles.innerOtp}>
            <TextInput />
          </View>
          <View style={styles.innerOtp}>
            <TextInput />
          </View>
          <View style={styles.innerOtp}>
            <TextInput />
          </View>
        </View>
        <ButtonSubmit name="Reset Password" onPress={()=>SignUpHandler()} />
        <View style={styles.TextDisplay}>
          <Text style={styles.colors}>Didn’t get OTP? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles.SignIn}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
};

export default Otp;
