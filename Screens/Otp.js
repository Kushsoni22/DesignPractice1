/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Svg, Rect, G} from 'react-native-svg';
import SvgComponent2 from '../SVG/SVGForgot';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import SvgComponent4 from '../SVG/SVGRect1';
import SvgComponent5 from '../SVG/SVGRect2';
import SvgComponentarrow from '../SVG/SVGArrow';

const Otp = ({navigation}) => {
  const SignInHandler = () => {
    navigation.goBack();
  };

  const SignUpHandler = () => {
    navigation.navigate('conf');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: moderateScale(21, 0.1),
      }}>
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Svg width="40" height="20">
          <SvgComponentarrow />
        </Svg>
      </Pressable>
      <View style={styles.rootHeader}>
        <View style={styles.rootSVG}>
          <Svg width="40" height="20">
            <G>
              <SvgComponent5 />
            </G>
          </Svg>
          <Svg width="40" height="20">
            <G>
              <SvgComponent4 />
            </G>
          </Svg>
          <Svg width="40" height="20">
            <G>
              <SvgComponent5 />
            </G>
          </Svg>
        </View>
        <View style={{marginLeft: moderateScale(25, 0.1)}}>
          <Svg width="120" height="120">
            <G>
              <Rect
                x="0"
                y="0"
                width="80"
                height="80"
                strokeWidth="1"
                fill="#D6DFFF"
                rx="20"
                ry="20"
              />
              <View style={{marginLeft: moderateScale(5, 0.1)}}>
                <SvgComponent2 />
              </View>
            </G>
          </Svg>
        </View>
        <Text style={styles.HeaderSignup}>Enter OTP</Text>

        <View style={{margin: 0, padding: 0}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: moderateScale(20, 0.1),
              lineHeight: moderateScale(20, 0.1),
              color: '#61677D',
            }}>
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
        <View style={styles.signuproot}>
          <TouchableOpacity onPress={SignUpHandler}>
            <Text style={styles.signup}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TextDisplay}>
          <Text style={{color: '#3B4054', fontSize: 13}}>Didn’t get OTP? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles.SignIn}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  innerOtp1: {
    padding: moderateScale(10, 0.1),
    marginTop: moderateScale(25, 0.1),
    marginRight: moderateScale(15, 0.1),
    backgroundColor: '#F5F9FE',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EAEFF5',
    marginBottom: moderateScale(30, 0.1),
    width: scale(45),
    marginLeft: moderateScale(5, 0.1),
    height: verticalScale(57),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerOtp: {
    padding: moderateScale(10, 0.1),
    marginTop: moderateScale(25, 0.1),
    marginRight: moderateScale(15, 0.1),
    backgroundColor: '#F5F9FE',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EAEFF5',
    marginBottom: moderateScale(30, 0.1),
    width: scale(45),
    height: verticalScale(57),
    // marginLeft: moderateScale(5,0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootRectOtp: {
    flexDirection: 'row',
    // padding: moderateScale(10,0.1),
    margin: 0,
    // justifyContent: 'space-evenly',
  },
  arrow: {
    // marginHorizontal: moderateScale(20, 0.1),
    marginVertical: moderateScale(20, 0.1),
  },
  rootSVG: {
    flexDirection: 'row',
    marginBottom: moderateScale(35, 0.1),
  },
  TextDisplay: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    // textAlignVertical: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(12, 0.1),
    marginRight: moderateScale(130, 0.1),
  },
  SignIn: {
    color: '#3461FD',
    fontSize: 13,
  },
  HeaderSignup: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: moderateScale(30, 0.1),
    fontFamily: 'Poppins-Regular',
    color: '#2A4ECA',
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(12, 0.1),
  },
  placeh: {
    paddingHorizontal: moderateScale(18, 0.1),
    paddingVertical: moderateScale(3, 0.1),
    backgroundColor: '#F5F9FE',
    // marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(7, 0.1),
    borderRadius: moderateScale(15, 0.1),
    fontFamily: 'Poppins-Regular',
    flexDirection: 'row',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: moderateScale(24, 0.1),
  },
  signuproot: {
    justifyContent: 'center',
    marginTop: moderateScale(12, 0.1),
    paddingVertical: moderateScale(18, 0.1),
    // paddingHorizontal: moderateScale(114),
    marginHorizontal: moderateScale(24, 0.1),
    borderRadius: moderateScale(14, 0.1),
    backgroundColor: '#3461FD',
    // shadowRadius: 5,
    elevation: 20,
    shadowColor: '#3461FD',
    // flexDirection: 'row',
    width: scale(300),
  },
  signup: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
