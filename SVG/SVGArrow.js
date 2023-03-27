/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponentarrow(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 16L0 8L8 0L9.05 1.05L2.85 7.25H16V8.75H2.85L9.05 14.95L8 16Z"
        fill="black"
      />
    </Svg>
  );
}

export default SvgComponentarrow;
