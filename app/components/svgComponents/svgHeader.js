/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {color} from 'theme';
import {Svg, Rect, G} from 'react-native-svg';
export const SvgHeader = props => {
  return (
    <Svg width="90" height="90">
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
        {props.function}
      </G>
    </Svg>
  );
};







