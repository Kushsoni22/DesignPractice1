/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {color} from 'theme';
import {styles} from './style';
import {Svg,Rect, G} from 'react-native-svg';

export const SvgLock = props => {
  return (
    <Svg width="120" height="120">
      <G>
        <Rect
          x="0"
          y="0"
          width="80"
          height="80"
          strokeWidth="1"
          fill={color.SvgRect}
          rx="20"
          ry="20"
        />
        <View style={styles.RightScale}>{props.name}</View>
      </G>
    </Svg>
  );
};
