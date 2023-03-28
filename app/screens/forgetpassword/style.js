/* eslint-disable prettier/prettier */
// import {moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {color, fonts, fontSize, fontWeight, size} from 'theme';


export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    padding: size.moderateScale(15,0.1),
  },

  rootmargin: {
    marginTop: size.moderateScale(12, 0.1),
    marginBottom: size.moderateScale(6, 0.1),
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
    marginBottom: size.moderateScale(15, 0.1),
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
  marginLeftScale: {marginLeft: size.moderateScale(25, 0.1)},
});
