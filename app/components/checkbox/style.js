/* eslint-disable prettier/prettier */
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import { color, fonts, fontSize, fontWeight } from 'theme';

export const styles = StyleSheet.create({
  eye: {
    marginLeft: 'auto',
    alignSelf: 'center',
  },
  leftScale: {
    marginLeft: moderateScale(25, 0.1),
    marginTop: moderateScale(5, 0.1),
  },
  scgCom: {marginLeft: moderateScale(5, 0.1)},
  innerOtp1: {
    padding: moderateScale(10, 0.1),
    marginTop: moderateScale(25, 0.1),
    marginRight: moderateScale(15, 0.1),
    backgroundColor: color.innerOtp1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: color.SvgRectLock,
    marginBottom: moderateScale(30, 0.1),
    width: scale(45),
    marginLeft: moderateScale(10, 0.1),
  },
  rootTexr: {marginBottom: moderateScale(25, 0.1), padding: 0},
  Textr: {
    textAlign: 'center',
    marginTop: moderateScale(20, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: color.Textr,
  },
  Text: {marginHorizontal: moderateScale(24, 0.1), flexDirection: 'row'},
  Spinner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  RightScale: {marginLeft: moderateScale(5, 0.1)},
  leftScale1: {marginLeft: moderateScale(25, 0.1)},
  colors: {color: color.fontMiddle, fontSize: fontSize.small},
  OtpScale: {
    textAlign: 'center',
    marginTop: moderateScale(20, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: color.Textr,
  },
  innerOtp: {
    padding: moderateScale(10, 0.1),
    marginTop: moderateScale(25, 0.1),
    marginRight: moderateScale(15, 0.1),
    backgroundColor:color.innerOtp1,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: color.SvgRectLock,
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
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  rootp: {
    textAlign: 'center',
    // marginTop: moderateScale(20, 0.1),
    marginHorizontal: moderateScale(14, 0.1),
    fontSize: fontSize.mediumSmall,
    color: color.Textr,
    // lineHeight: 15,
    // fontWeight: 500
  },
  rootAccountHeld: {
    color: color.fontMiddle,
  },
  rootface: {
    marginLeft: moderateScale(18, 0.1),
    textAlignVertical: 'center',
    color: color.Textr,
    fontFamily: fonts.poppinsFont,
    fontWeight: fontWeight.medium,
  },
  rooti: {
    flex: 1,
    height: verticalScale(1),
    backgroundColor: color.Line,
    // marginLeft: moderateScale(10, 0.1),
  },
  rootText1: {
    flex: 1,
    height: verticalScale(1),
    backgroundColor: color.Line,
    // marginRight: moderateScale(10, 0.1),
    // marginBottom: moderateScale(5, 0.1),
  },
  terms: {
    flexWrap: 'wrap',
    // flex: 1,
    marginLeft: moderateScale(7, 0.1),
    height: verticalScale(35),
    textAlignVertical: 'center',
    width: scale(265),
    color: color.fontMiddle,
    fontSize: fontSize.small,
  },
  rootP: {
    width: scale(50),
    textAlign: 'center',
    color: 'black',
  },
  signuproot: {
    justifyContent: 'center',
    marginTop: moderateScale(10, 0.1),
    paddingVertical: moderateScale(18, 0.1),
    // paddingHorizontal: moderateScale(114),
    marginHorizontal: moderateScale(24, 0.1),
    borderRadius: moderateScale(14, 0.1),
    backgroundColor: color.Primary,
    // shadowRadius: 5,
    elevation: 20,
    shadowColor: color.Primary,
    // flexDirection: 'row',
    width: scale(300),
  },
  rootH: {flexDirection: 'row', alignItems: 'center'},
  signup: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontFamily: fonts.poppinsFont,
    fontSize: fontSize.large,
  },
  rootmargin: {
    marginTop: moderateScale(12, 0.1),
    marginBottom: moderateScale(6, 0.1),
  },
  TextDisplay: {
    fontFamily: fonts.poppinsFont,
    fontWeight: fontWeight.light,
    textAlignVertical: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(12, 0.1),
    marginLeft: moderateScale(35, 0.1),
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
    marginBottom: moderateScale(10, 0.1),
  },
  tinyLogo: {
    width: scale(50),
    height: verticalScale(50),
  },
  Facebook: {
    flexDirection: 'row',
    paddingVertical: moderateScale(13, 0.1),
    paddingHorizontal: moderateScale(20, 0.1),
    backgroundColor: color.innerOtp1,
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
    fontWeight: fontWeight.dark,
    fontSize: fontSize.veryLarge,
    lineHeight: moderateScale(40, 0.1),
    fontFamily: fonts.poppinsFont,
    color: color.Header,
    marginTop: moderateScale(12, 0.1),
    marginBottom: moderateScale(14, 0.1),
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(40, 0.1),
    marginBottom: moderateScale(10, 0.1),
  },
  placeh: {
    paddingHorizontal: moderateScale(18, 0.1),
    paddingVertical: moderateScale(3, 0.1),
    backgroundColor: color.innerOtp1,
    // marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(7, 0.1),
    borderRadius: moderateScale(15, 0.1),
    fontFamily: fonts.poppinsFont,
    flexDirection: 'row',
    width: scale(300),
//     flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor: color.innerOtp1,
    // borderColor: 'white',
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: color.innerOtp1,
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: fontWeight.dark,
    fontSize: fontSize.mediumLarge,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: fontWeight.light,
    fontSize: fontSize.large1,
  },
  arrow: {
    marginHorizontal: moderateScale(10, 0.1),
    marginTop: moderateScale(20, 0.1),
    marginBottom: moderateScale(25, 0.1),
  },
  rootSVG: {
    flexDirection: 'row',
    marginBottom: moderateScale(40, 0.1),
  },
  ForgetSvg: {
    marginLeft: moderateScale(5, 0.1),
  },
  rootCompareText: {marginHorizontal: moderateScale(11, 0.1)},
  CompareText: {
    textAlign: 'center',
    marginTop: moderateScale(20, 0.1),
    // marginHorizontal: moderateScale(11, 0.1),
    marginBottom: moderateScale(20, 0.1),
    color: color.Textr,
  },
  placeholderRoot: {marginHorizontal: moderateScale(24, 0.1)},
  marginLeftScale: {marginLeft: moderateScale(25, 0.1)},
});
