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
import { styles3 } from 'screens';
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
    <ScrollView style={styles3.root}>
    <View
    style={styles3.root}>
      <Pressable style={styles3.arrow} onPress={() => navigation.goBack()}>
        <Svg width="40" height="20">
          <SvgComponentarrow />
        </Svg>
      </Pressable>
      <View style={styles3.rootHeader}>
      <Threelines name1={<SvgComponent5 />} name2={<SvgComponent4 />} name3={<SvgComponent5 />} />
        </View>
        <View style={styles3.leftScale}>
          <SvgLock name={<SvgComponent2 />} />
        </View>
        <Text style={styles3.HeaderSignup}>Enter OTP</Text>

        <View>
          <Text
            style={styles3.OtpScale}>
            Enter the OTP code we just sent<Text>{'\n'}</Text>
            you on your registered Email/Phone number
          </Text>
        </View>
        <View style={styles3.rootRectOtp}>
          <View style={styles3.innerOtp1}>
            <TextInput />
          </View>
          <View style={styles3.innerOtp}>
            <TextInput />
          </View>
          <View style={styles3.innerOtp}>
            <TextInput />
          </View>
          <View style={styles3.innerOtp}>
            <TextInput />
          </View>
          <View style={styles3.innerOtp}>
            <TextInput />
          </View>
        </View>
        <ButtonSubmit name="Reset Password" onPress={()=>SignUpHandler()} />
        <View style={styles3.TextDisplay}>
          <Text style={styles3.colors}>Didn’t get OTP? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles3.SignIn}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
};

export default Otp;
