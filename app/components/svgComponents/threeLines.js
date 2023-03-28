/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';
import {styles} from './style';
import {Svg, G} from 'react-native-svg';

export const Threelines = props => {
  return (
    <View style={styles.rootSVG}>
      <Svg width="40" height="20">
        <G>{props.name1}</G>
      </Svg>
      <Svg width="40" height="20">
        <G>{props.name2}</G>
      </Svg>
      <Svg width="40" height="20">
        <G>{props.name3}</G>
      </Svg>
    </View>
  );
};
