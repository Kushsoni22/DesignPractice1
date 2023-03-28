/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {SvgComponent} from 'theme';

import {styles1} from 'screens';
import {ButtonSignInLoginIn} from 'components';
import {MyCheckbox} from 'components';
import {TextInput1, TextInput2, TextInputtext} from 'components';
import {SvgFacebook, SvgHeader} from 'components';

const Signup = ({navigation}) => {
  const SignInHandler = () => {
    navigation.navigate('signin');
  };

  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles1.root}>
      <View style={styles1.root}>
        <View style={styles1.rootHeader}>
          <SvgHeader function={<SvgComponent />} />
          <Text style={styles1.HeaderSignup}>Sign Up</Text>
          <Text style={styles1.rootp}>
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </Text>
        </View>
        <View style={styles1.mainFacebook}>
          <SvgFacebook name="Facebook" name1="Google" />

          <View style={styles1.rootmargin}>
            <View style={styles1.rootH}>
              <View style={styles1.rooti} />
              <View>
                <Text style={styles1.rootP}>Or</Text>
              </View>
              <View style={styles1.rootText1} />
            </View>
          </View>

          <TextInputtext />
          <TextInput1 />
          <TextInput2 placeh="Password" />
        <View style={styles1.checkbox}>
          <MyCheckbox onChange={() => setChecked(!checked)} checked={checked} />
          <Text style={styles1.terms}>
            I am agree to The{' '}
            <Text style={styles1.SignIn}>Terms of Service</Text>
            <Text> </Text>
            and <Text style={styles1.SignIn}>Privacy Policy</Text>
          </Text>
        </View>
        <ButtonSignInLoginIn name="Sign Up" />
        </View>



        <View style={styles1.TextDisplay}>
          <Text style={styles1.signupText}>Do you have account? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles1.SignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
