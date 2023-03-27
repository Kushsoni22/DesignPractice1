/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
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
import {scale, moderateScale} from 'react-native-size-matters';
import SvgComponent4 from '../SVG/SVGRect1';
import SvgComponent5 from '../SVG/SVGRect2';
import SvgComponentarrow from '../SVG/SVGArrow';

const Authap = ({navigation}) => {
  const SignUpHandler = () => {
    navigation.navigate('otp');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: moderateScale(15, 0.1),
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
              <SvgComponent4 />
            </G>
          </Svg>
          <Svg width="40" height="20">
            <G>
              <SvgComponent5 />
            </G>
          </Svg>
          <Svg width="40" height="20">
            <G>
              <SvgComponent5 />
            </G>
          </Svg>
        </View>
        <View style={{marginLeft: moderateScale(25, 0.1)}}>
          <Svg width="105" height="105">
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
        <Text style={styles.HeaderSignup}>Forgot Password</Text>

        <View style={{marginHorizontal: moderateScale(11, 0.1)}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: moderateScale(20, 0.1),
              // marginHorizontal: moderateScale(11, 0.1),
              marginBottom: moderateScale(20, 0.1),
              color: '#61677D',
            }}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
        </View>
        <View style={{marginHorizontal: moderateScale(24, 0.1)}}>
          <View style={styles.placeh}>
            <TextInput
              placeholder="Email I'D/Mobile Number"
              placeholderTextColor="#7C8BA0"
              keyboardType="email-address"
            />
          </View>
        </View>
        <View style={styles.signuproot}>
          <TouchableOpacity onPress={SignUpHandler}>
            <Text style={styles.signup}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Authap;

const styles = StyleSheet.create({
  arrow: {
    marginHorizontal: moderateScale(10, 0.1),
    marginTop: moderateScale(20, 0.1),
    marginBottom: moderateScale(25, 0.1),
  },
  rootSVG: {
    flexDirection: 'row',
    marginBottom: moderateScale(40, 0.1),
  },
  TextDisplay: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    textAlignVertical: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(15, 0.1),
    // marginLeft: moderateScale(35, 0.1),
  },
  SignIn: {
    color: 'blue',
  },
  HeaderSignup: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: moderateScale(40, 0.1),
    fontFamily: 'Poppins-Regular',
    color: '#2A4ECA',
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(14, 0.1),
  },
  placeh: {
    paddingHorizontal: moderateScale(10, 0.1),
    paddingVertical: moderateScale(5, 0.1),
    backgroundColor: '#F5F9FE',
    // marginHorizontal: moderateScale(24, 0.1),
    marginBottom: moderateScale(15, 0.1),
    // marginTop: moderateScale(15, 0.1),
    borderRadius: moderateScale(15, 0.1),
    fontFamily: 'Poppins-Regular',
    width: scale(300),
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: moderateScale(24, 0.1),
  },
  signuproot: {
    justifyContent: 'center',
    marginTop: moderateScale(10, 0.1),
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
