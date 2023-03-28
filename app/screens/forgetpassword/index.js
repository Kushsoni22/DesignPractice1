/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Pressable, ScrollView} from 'react-native';
import {Svg} from 'react-native-svg';
import {SvgComponent2} from 'theme';
import {SvgComponent4} from 'theme';
import {SvgComponent5} from 'theme';
import {SvgComponentarrow} from 'theme';
import {styles} from './style';
import {ButtonSubmit} from 'components';
import {TextInput1} from 'components';
import {SvgMessage, Threelines} from 'components';

const Authap = ({navigation}) => {
  const SignUpHandler = () => {
    navigation.navigate('otp');
  };

  return (
    <ScrollView style={styles.root}>
    <View style={styles.root}>
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Svg width="40" height="20">
          <SvgComponentarrow />
        </Svg>
      </Pressable>
      <View style={styles.rootHeader}>
        <Threelines
          name1={<SvgComponent4 />}
          name2={<SvgComponent5 />}
          name3={<SvgComponent5 />}
        />
        <View style={styles.marginLeftScale}>
          <SvgMessage message={<SvgComponent2 />} />
        </View>
        <Text style={styles.HeaderSignup}>Forgot Password</Text>

        <View style={styles.rootCompareText}>
          <Text style={styles.CompareText}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
        <TextInput1 />
        <ButtonSubmit name="Continue" onPress={() => SignUpHandler()} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Authap;
