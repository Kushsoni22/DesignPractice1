/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Svg, Path, Rect, G, Defs, ClipPath} from 'react-native-svg';
export const SvgFacebook = props => {
  return (
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
          <Text style={styles.rootface}>{props.name}</Text>
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
          <Text style={styles.rootface}>{props.name1}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
