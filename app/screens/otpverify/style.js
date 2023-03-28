/* eslint-disable prettier/prettier */
// import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {color, fonts, fontSize, fontWeight, size} from 'theme';

export const styles = StyleSheet.create({

  leftScale: {
    marginLeft: size.moderateScale(25, 0.1),
    marginTop: size.moderateScale(5, 0.1),
    alignItems: 'center',
  },
  innerOtp1: {
    padding: size.moderateScale(10, 0.1),
    marginTop: size.moderateScale(25, 0.1),
    marginRight: size.moderateScale(15, 0.1),
    backgroundColor: color.innerOtp1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: color.SvgRectLock,
    marginBottom: size.moderateScale(30, 0.1),
    width: size.scale(45),
    marginLeft: size.moderateScale(10, 0.1),
    alignItems: 'center',
    height: size.verticalScale(57),

    justifyContent: 'center',
  },

  Text: {marginHorizontal: size.moderateScale(24, 0.1), flexDirection: 'row'},
  Spinner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  RightScale: {marginLeft: size.moderateScale(5, 0.1)},
  leftScale1: {marginLeft: size.moderateScale(25, 0.1)},
  colors: {color: color.fontMiddle, fontSize: fontSize.small},
  OtpScale: {
    textAlign: 'center',
    marginTop: size.moderateScale(20, 0.1),
    lineHeight: size.moderateScale(20, 0.1),
    color: color.Textr,
  },
  innerOtp: {
    padding: size.moderateScale(10, 0.1),
    marginTop: size.moderateScale(25, 0.1),
    marginRight: size.moderateScale(15, 0.1),
    backgroundColor: color.innerOtp1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: color.SvgRectLock,
    marginBottom: size.moderateScale(30, 0.1),
    width: size.scale(45),
    height: size.verticalScale(57),
    // marginLeft: moderateScale(5,0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootRectOtp: {
    flexDirection: 'row',
    // padding: moderateScale(10,0.1),
    margin: 0,
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    backgroundColor: 'white',
    padding: size.moderateScale(15, 0.1),
  },

  signuproot: {
    justifyContent: 'center',
    marginTop: size.moderateScale(10, 0.1),
    paddingVertical: size.moderateScale(18, 0.1),
    // paddingHorizontal: moderateScale(114),
    marginHorizontal: size.moderateScale(24, 0.1),
    borderRadius: size.moderateScale(14, 0.1),
    backgroundColor: color.Primary,
    // shadowRadius: 5,
    elevation: 20,
    shadowColor: color.Primary,
    // flexDirection: 'row',
    width: size.scale(300),
  },

  signup: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fonts.poppinsFont,
    fontSize: fontSize.large,
  },
  TextDisplay: {
    fontFamily: fonts.poppinsFont,
    fontWeight: fontWeight.light,
    // textAlignVertical: 'center',
    flexDirection: 'row',
    marginTop: size.moderateScale(12, 0.1),
    // marginRight: moderateScale(130, 0.1),
    marginLeft: size.moderateScale(50,0.1),
  },
  signupText: {color: color.fontMiddle, fontSize: fontSize.small},
  SignIn: {
    color: color.Primary,
    fontSize: fontSize.small,
  },
  forgetText: {
    marginLeft: 'auto',
    color: color.placeholderColor,
    fontFamily: fonts.poppinsFont,
    marginBottom: size.moderateScale(10, 0.1),
  },
  HeaderSignup: {
    fontWeight: fontWeight.dark,
    fontSize: fontSize.veryLarge,
    lineHeight: size.moderateScale(40, 0.1),
    fontFamily: fonts.poppinsFont,
    color: color.Header,
    marginTop: size.moderateScale(12, 0.1),
    marginBottom: size.moderateScale(14, 0.1),
    textAlign: 'center',
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: size.moderateScale(40, 0.1),
    marginBottom: size.moderateScale(10, 0.1),
  },
  placeh: {
    paddingHorizontal: size.moderateScale(18, 0.1),
    paddingVertical: size.moderateScale(3, 0.1),
    backgroundColor: color.innerOtp1,
    // marginHorizontal: moderateScale(10),
    marginVertical: size.moderateScale(7, 0.1),
    borderRadius: size.moderateScale(15, 0.1),
    fontFamily: fonts.poppinsFont,
    flexDirection: 'row',
  },

  arrow: {
    marginHorizontal: size.moderateScale(10, 0.1),
    marginTop: size.moderateScale(20, 0.1),
    marginBottom: size.moderateScale(25, 0.1),
  },

  rootCompareText: {marginHorizontal: size.moderateScale(11, 0.1)},
  CompareText: {
    textAlign: 'center',
    marginTop: size.moderateScale(20, 0.1),
    // marginHorizontal: moderateScale(11, 0.1),
    marginBottom: size.moderateScale(20, 0.1),
    color: color.Textr,
  },
  placeholderRoot: {marginHorizontal: size.moderateScale(24, 0.1)},
  marginLeftScale: {marginLeft: size.moderateScale(25, 0.1)},
});
