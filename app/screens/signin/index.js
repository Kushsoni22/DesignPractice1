/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SvgComponent1} from 'theme';
import {styles} from './style';
import {ButtonSignInLoginIn} from 'components';
import {TextInput1, TextInput2} from 'components';
import {SvgFacebook, SvgHeader} from 'components';

const Signin = ({navigation}) => {
  const SignInHandler = () => {
    navigation.navigate('signup');
  };

  const ForgetPassHandler = () => {
    navigation.navigate('auth');
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.root}>
        <View style={styles.rootHeader}>
          <SvgHeader function={<SvgComponent1 />} />
          <Text style={styles.HeaderSignup}>Sign In</Text>
          <Text style={styles.rootp}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
        </View>
        <View style={styles.mainFacebook}>
          <SvgFacebook name="Facebook" name1="Google" />
          <View style={styles.rootmargin}>
            <View style={styles.rootH}>
              <View style={styles.rooti} />
              <View>
                <Text style={styles.rootP}>Or</Text>
              </View>
              <View style={styles.rootText1} />
            </View>
          </View>

          <TextInput1 />
          <TextInput2 placeh="Password" />

          <View>
            <TouchableOpacity onPress={() => ForgetPassHandler()}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        <ButtonSignInLoginIn name="Log In" />
        </View>


        <View style={styles.TextDisplay}>
          <Text style={styles.rootAccountHeld}>Don't have account? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles.SignIn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
