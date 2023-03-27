/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Svg, Rect, G} from 'react-native-svg';
// import SvgComponent2 from '../SVG/SVGForgot';
import {moderateScale, scale} from 'react-native-size-matters';
import SvgComponent4 from '../SVG/SVGRect1';
import SvgComponent5 from '../SVG/SVGRect2';
import SvgComponentarrow from '../SVG/SVGArrow';
import SvgComponentLock from '../SVG/SVGLock';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTogglePasswordVisibility} from './PasswordEye';
import {useTogglePasswordVisibility1} from './PPP';

const Confirm = ({navigation}) => {
  const SignUpHandler = () => {
    navigation.navigate('signin');
  };

  //   const SignInHandler = () => {
  //     navigation.navigate('signin');
  //   };

  //   const [checked, setChecked] = useState(false);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const [check, setcheck] = useState(false);
  const [passc, setpassc] = useState('');
  const [pass, setpass] = useState('');
  // const [icon, seticon] = useState('eye');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const {passwordVisibility1, rightIcon1, handlePasswordVisibility1} =
    useTogglePasswordVisibility1();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: moderateScale(20, 0.1),
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
              <SvgComponent5 />
            </G>
          </Svg>
          <Svg width="40" height="20">
            <G>
              <SvgComponent4 />
            </G>
          </Svg>
        </View>
        <View
          style={{
            marginLeft: moderateScale(25, 0.1),
            marginTop: moderateScale(5, 0.1),
          }}>
          <Svg width="110" height="110">
            <G>
              <Rect
                x="0"
                y="0"
                width="80"
                height="80"
                strokeWidth="1"
                fill="#EAEFF5"
                rx="20"
                ry="20"
              />
              <View style={{marginLeft: moderateScale(5, 0.1)}}>
                <SvgComponentLock />
              </View>
            </G>
          </Svg>
        </View>
        <Text style={styles.HeaderSignup}>Reset Password</Text>

        <View style={{marginBottom: moderateScale(25, 0.1), padding: 0}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: moderateScale(20, 0.1),
              lineHeight: moderateScale(17, 0.1),
              color: '#61677D',
            }}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(24, 0.1),
            flexDirection: 'row',
          }}>
          <View style={styles.placeh}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#7C8BA0"
              textContentType="password"
              keyboardType="default"
              secureTextEntry={passwordVisibility}
              value={pass}
              onChangeText={e => setpass(e)}
            />
            <Pressable onPress={handlePasswordVisibility} style={styles.eye}>
              <Icon1 name={rightIcon} size={22} color="#7C8BA0" />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(24, 0.1),
            flexDirection: 'row',
          }}>
          <View style={styles.placeh}>
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="#7C8BA0"
              textContentType="newPassword"
              secureTextEntry={passwordVisibility1}
              value={passc}
              onChangeText={e => setpassc(e)}
            />
            <Pressable onPress={handlePasswordVisibility1} style={styles.eye}>
              <Icon1 name={rightIcon1} size={22} color="#7C8BA0" />
            </Pressable>
          </View>
        </View>
        <View style={styles.signuproot}>
          <TouchableOpacity onPress={SignUpHandler}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Icon name="spinner" size={20} color="white" />
              <Text style={styles.signup}>Submitting...</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  eye: {
    marginLeft: 'auto',
    alignSelf: 'center',
  },
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
    marginLeft: moderateScale(10, 0.1),
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
    // marginLeft: moderateScale(5,0.1),
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
    lineHeight: moderateScale(35, 0.1),
    fontFamily: 'Poppins-Regular',
    // marginTop: moderateScale(5,0.1),
    color: '#2A4ECA',
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(12, 0.1),
  },
  placeh: {
    paddingHorizontal: moderateScale(10, 0.1),
    paddingVertical: moderateScale(4, 0.1),
    backgroundColor: '#F5F9FE',
    // marginHorizontal: moderateScale(24, 0.1),
    marginBottom: moderateScale(14, 0.1),
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
    marginTop: moderateScale(15, 0.1),
    paddingVertical: moderateScale(18, 0.1),
    // paddingHorizontal: moderateScale(114),
    marginHorizontal: moderateScale(22, 0.1),
    borderRadius: moderateScale(14, 0.1),
    backgroundColor: '#3461FD',
    // shadowRadius: 5,
    elevation: 20,
    shadowColor: '#3461FD',
    // flexDirection: 'row',
    width: scale(295),
    textAlignVertical: 'center',
  },
  signup: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    marginLeft: moderateScale(5, 0.1),
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
