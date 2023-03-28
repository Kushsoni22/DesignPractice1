/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Pressable, ScrollView} from 'react-native';
import {Svg} from 'react-native-svg';
import {SvgComponent2} from 'theme';
import {SvgComponent4} from 'theme';
import {SvgComponent5} from 'theme';
import {SvgComponentarrow} from 'theme';
import {styles5} from 'screens';
import {ButtonSubmit} from 'components';
import {TextInput1} from 'components';
import {SvgMessage, Threelines} from 'components';

const Authap = ({navigation}) => {
  const SignUpHandler = () => {
    navigation.navigate('otp');
  };

  return (
    <ScrollView style={styles5.root}>
    <View style={styles5.root}>
      <Pressable style={styles5.arrow} onPress={() => navigation.goBack()}>
        <Svg width="40" height="20">
          <SvgComponentarrow />
        </Svg>
      </Pressable>
      <View style={styles5.rootHeader}>
        <Threelines
          name1={<SvgComponent4 />}
          name2={<SvgComponent5 />}
          name3={<SvgComponent5 />}
        />
        <View style={styles5.marginLeftScale}>
          <SvgMessage message={<SvgComponent2 />} />
        </View>
        <Text style={styles5.HeaderSignup}>Forgot Password</Text>

        <View style={styles5.rootCompareText}>
          <Text style={styles5.CompareText}>
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
