/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {Svg, Path, Rect, G, Defs, ClipPath} from 'react-native-svg';
import SvgComponent1 from '../SVG/SVGWave';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {useTogglePasswordVisibility} from './PasswordEye';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Signin = ({navigation}) => {
  const SignInHandler = () => {
    navigation.navigate('signup');
  };

  const ForgetPassHandler = () => {
    navigation.navigate('auth');
  };

  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.rootHeader}>
        <Svg width="90" height="90">
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
            <SvgComponent1 />
          </G>
        </Svg>
        <Text style={styles.HeaderSignup}>Sign In</Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: moderateScale(14, 0.1),
            fontSize: 13,
            color: '#61677D',
          }}>
          It was popularised in the 1960s with the release of Letraset
          sheetscontaining Lorem Ipsum.
        </Text>
      </View>
      <View style={styles.mainFacebook}>
        <View style={styles.FacebookRoot}>
          <TouchableOpacity>
            <View style={styles.Facebook}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Rect width="24" height="24" rx="6" fill="#1877F2" />
                <Path
                  d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80078 14.3391 7.875 15.8297 7.875H17.3438V4.92188C17.3438 4.92188 15.9703 4.6875 14.6578 4.6875C11.9156 4.6875 10.125 6.34922 10.125 9.35625V12H7.07812V15.4688H10.125V23.8547C10.7367 23.9508 11.3625 24 12 24C12.6375 24 13.2633 23.9508 13.875 23.8547V15.4688H16.6711Z"
                  fill="white"
                />
              </Svg>
              <Text
                style={{
                  marginLeft: moderateScale(18, 0.1),
                  textAlignVertical: 'center',
                  color: '#61677D',
                  fontFamily: 'Poppins-Regular',
                  fontWeight: 600,
                }}>
                Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Facebook}>
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <G clip-path="url(#clip0_16_388)">
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.52 12.2728C23.52 11.4219 23.4436 10.6037 23.3018 9.81824H12V14.4601H18.4582C18.18 15.9601 17.3345 17.231 16.0636 18.0819V21.0928H19.9418C22.2109 19.0037 23.52 15.9273 23.52 12.2728Z"
                    fill="#4285F4"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 24C15.24 24 17.9564 22.9255 19.9418 21.0928L16.0636 18.0818C14.9891 18.8018 13.6145 19.2273 12 19.2273C8.87455 19.2273 6.22909 17.1164 5.28546 14.28H1.27637V17.3891C3.25091 21.3109 7.30909 24 12 24Z"
                    fill="#34A853"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.28545 14.2801C5.04545 13.5601 4.90909 12.791 4.90909 12.0001C4.90909 11.2091 5.04545 10.4401 5.28545 9.72005V6.61096H1.27636C0.463636 8.23096 0 10.0637 0 12.0001C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.28545 14.2801Z"
                    fill="#FBBC05"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 4.77273C13.7618 4.77273 15.3436 5.37818 16.5873 6.56727L20.0291 3.12545C17.9509 1.18909 15.2345 0 12 0C7.30909 0 3.25091 2.68909 1.27637 6.61091L5.28546 9.72C6.22909 6.88364 8.87455 4.77273 12 4.77273Z"
                    fill="#EA4335"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_16_388">
                    <Rect width="24" height="24" rx="6" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
              <Text
                style={{
                  marginLeft: moderateScale(18, 0.1),
                  textAlignVertical: 'center',
                  color: '#61677D',
                  fontFamily: 'Poppins-Regular',
                  fontWeight: 600,
                }}>
                Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: moderateScale(12, 0.1),
            marginBottom: moderateScale(6, 0.1),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                height: verticalScale(1),
                backgroundColor: '#E0E5EC',
              }}
            />
            <View>
              <Text
                style={{width: scale(50), textAlign: 'center', color: 'black'}}>
                Or
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: verticalScale(1),
                backgroundColor: '#E0E5EC',
              }}
            />
          </View>
        </View>

        <View style={styles.placeh}>
          <TextInput
            placeholder="Email/Phone Number"
            placeholderTextColor="#7C8BA0"
            keyboardType="email-address"
            value={email}
            onChangeText={e => setemail(e)}
          />
        </View>
        <View style={styles.placeh}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7C8BA0"
            secureTextEntry={passwordVisibility}
            value={pass}
            onChangeText={e => setpass(e)}
          />
          <Pressable onPress={handlePasswordVisibility} style={styles.eye}>
            <Icon name={rightIcon} size={22} color="#7C8BA0" />
          </Pressable>
        </View>

        <View>
          <TouchableOpacity onPress={() => ForgetPassHandler()}>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: moderateScale(15, 0.1),
                marginTop: moderateScale(0, 0.1),
                color: '#7C8BA0',
                fontSize: 12,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signuproot}>
        <TouchableOpacity onPress={() => Alert.alert('hello user')}>
          <Text style={styles.signup}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TextDisplay}>
        <Text style={{color: '#3B4054'}}>Don't have account? </Text>
        <TouchableOpacity onPress={SignInHandler}>
          <Text style={styles.SignIn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  terms: {
    flexWrap: 'wrap',
    // flex: 1,
    marginLeft: moderateScale(7, 0.1),
    height: verticalScale(35),
    textAlignVertical: 'center',
    width: scale(265),
    color: '#3B4054',
    fontSize: 13,
  },
  signuproot: {
    justifyContent: 'center',
    marginTop: moderateScale(24, 0.1),
    paddingVertical: moderateScale(16, 0.1),
    marginHorizontal: moderateScale(24, 0.1),

    borderRadius: moderateScale(14, 0.1),
    backgroundColor: '#3461FD',
    // shadowRadius: 5,
    elevation: 20,
    shadowColor: '#3461FD',
    // flexDirection: 'row',
  },
  signup: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  eye: {
    marginLeft: 'auto',
    alignSelf: 'center',
  },
  TextDisplay: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    textAlignVertical: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(12, 0.1),
    marginLeft: moderateScale(35, 0.1),
  },
  SignIn: {
    color: '#3461FD',
    fontSize: 13,
  },
  tinyLogo: {
    width: scale(50),
    height: verticalScale(50),
  },
  Facebook: {
    flexDirection: 'row',
    paddingVertical: moderateScale(13, 0.1),
    paddingHorizontal: moderateScale(20, 0.1),
    backgroundColor: '#F5F9FE',
    width: scale(145),
    // justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: moderateScale(0, 0.1),
    borderRadius: moderateScale(14, 0.1),
  },
  mainFacebook: {
    paddingHorizontal: moderateScale(24, 0.1),
  },
  FacebookRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(17, 0.1),
    marginBottom: moderateScale(4, 0.1),
  },
  HeaderSignup: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: moderateScale(40, 0.1),
    fontFamily: 'Poppins-Regular',
    color: '#2A4ECA',
    marginTop: moderateScale(12, 0.1),
    marginBottom: moderateScale(14, 0.1),
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(50, 0.1),
    marginBottom: moderateScale(10, 0.1),
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
    // alignItems: 'center',
    marginLeft: moderateScale(20, 0.1),
    marginBottom: moderateScale(18, 0.1),
    // backgroundColor: '#F5F9FE',
    marginTop: moderateScale(2, 0.1),
  },
  Check: {
    backgroundColor: '#F5F9FE',
    // borderColor: 'white',
  },
  // checkbox: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginLeft: '8%',
  // },
});
