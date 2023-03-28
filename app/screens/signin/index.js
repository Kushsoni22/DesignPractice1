/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SvgComponent1} from 'theme';
import {styles2} from 'screens';
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
    <ScrollView style={styles2.root}>
      <View style={styles2.root}>
        <View style={styles2.rootHeader}>
          <SvgHeader function={<SvgComponent1 />} />
          <Text style={styles2.HeaderSignup}>Sign In</Text>
          <Text style={styles2.rootp}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
        </View>
        <View style={styles2.mainFacebook}>
          <SvgFacebook name="Facebook" name1="Google" />
          <View style={styles2.rootmargin}>
            <View style={styles2.rootH}>
              <View style={styles2.rooti} />
              <View>
                <Text style={styles2.rootP}>Or</Text>
              </View>
              <View style={styles2.rootText1} />
            </View>
          </View>

          <TextInput1 />
          <TextInput2 placeh="Password" />

          <View>
            <TouchableOpacity onPress={() => ForgetPassHandler()}>
              <Text style={styles2.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        <ButtonSignInLoginIn name="Log In" />
        </View>


        <View style={styles2.TextDisplay}>
          <Text style={styles2.rootAccountHeld}>Don't have account? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles2.SignIn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
