/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { color, fonts, fontSize, fontWeight, size} from 'theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    // padding: size.moderateScale(15,0.1),
    paddingBottom: size.moderateScale(15,0.1),
  },
  rootp: {
    textAlign: 'center',
    marginHorizontal: size.moderateScale(14),
    fontSize: fontSize.mediumSmall,
    color: color.Textr,
  },
  rootAccountHeld: {
    color: color.fontMiddle,
  },
  rootface: {
    marginLeft: size.moderateScale(18, 0.1),
    textAlignVertical: 'center',
    color: color.Textr,
    fontFamily: fonts.poppinsFont,
    fontWeight: fontWeight.medium,
  },
  rooti: {
    flex: 1,
    height: size.verticalScale(1),
    backgroundColor: color.Line,
  },
  rootText1: {
    flex: 1,
    height: size.verticalScale(1),
    backgroundColor: color.Line,
  },
  terms: {
    flexWrap: 'wrap',
    marginLeft: size.moderateScale(7, 0.1),
    height: size.verticalScale(35),
    textAlignVertical: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    // width: size.scale(200),
    color: color.fontMiddle,
    fontSize: fontSize.small,
  },
  rootP: {
    width: size.scale(50),
    textAlign: 'center',
    color: 'black',
  },
  signuproot: {
    justifyContent: 'center',
    marginTop: size.moderateScale(10, 0.1),
    paddingVertical: size.moderateScale(18, 0.1),
    marginHorizontal: size.moderateScale(24, 0.1),
    borderRadius: size.moderateScale(14, 0.1),
    backgroundColor: color.Primary,
    elevation: 20,
    shadowColor: color.Primary,
    width: size.scale(300),
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
    marginTop: size.moderateScale(12, 0.1),
    marginBottom: size.moderateScale(6, 0.1),
  },
  TextDisplay: {
    fontFamily: fonts.poppinsFont,
    fontWeight: fontWeight.light,
    textAlignVertical: 'center',
    flexDirection: 'row',
    marginTop: size.moderateScale(12, 0.1),
    marginLeft: size.moderateScale(35, 0.1),
  },
  signupText: {color: color.fontMiddle, fontSize: fontSize.small},
  SignIn: {
    color: color.Primary,
    fontSize: fontSize.small,
  },

  mainFacebook: {
    paddingHorizontal: size.moderateScale(24, 0.1),
  },
  HeaderSignup: {
    fontWeight: fontWeight.dark,
    fontSize: fontSize.veryLarge,
    lineHeight: size.moderateScale(40, 0.1),
    fontFamily: fonts.poppinsFont,
    color: color.Header,
    marginTop: size.moderateScale(12, 0.1),
    marginBottom: size.moderateScale(14, 0.1),
  },
  rootHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: size.moderateScale(40, 0.1),
    marginBottom: size.moderateScale(10, 0.1),
  },
  checkbox: {
    flexDirection: 'row',
    // marginLeft: size.moderateScale(20, 0.1),
    marginBottom: size.moderateScale(18, 0.1),
    marginTop: size.moderateScale(2, 0.1),
  },
  Check: {
    backgroundColor: color.innerOtp1,
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
});
