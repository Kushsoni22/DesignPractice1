/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {color} from 'theme';
import {styles} from './style';
import {Svg, Rect, G} from 'react-native-svg';

export const Svgreset = props => {
  return (
    <Svg width="110" height="110">
      <G>
        <Rect
          x="0"
          y="0"
          width="80"
          height="80"
          strokeWidth="1"
          fill={color.SvgRectLock}
          rx="20"
          ry="20"
        />
        <View style={styles.scgCom}>{props.name}</View>
      </G>
    </Svg>
  );
};
