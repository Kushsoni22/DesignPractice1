/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {SvgComponent} from 'theme';

import {styles} from './style';
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
    <ScrollView style={styles.root}>
      <View style={styles.root}>
        <View style={styles.rootHeader}>
          <SvgHeader function={<SvgComponent />} />
          <Text style={styles.HeaderSignup}>Sign Up</Text>
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

          <TextInputtext />
          <TextInput1 />
          <TextInput2 placeh="Password" />
        <View style={styles.checkbox}>
          <MyCheckbox onChange={() => setChecked(!checked)} checked={checked} />
          <Text style={styles.terms}>
            I am agree to The{' '}
            <Text style={styles.SignIn}>Terms of Service</Text>
            <Text> </Text>
            and <Text style={styles.SignIn}>Privacy Policy</Text>
          </Text>
        </View>
        <ButtonSignInLoginIn name="Sign Up" />
        </View>



        <View style={styles.TextDisplay}>
          <Text style={styles.signupText}>Do you have account? </Text>
          <TouchableOpacity onPress={SignInHandler}>
            <Text style={styles.SignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
