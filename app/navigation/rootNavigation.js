/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Authap,Confirm,Signin,Signup,Otp } from 'screens';

const stack = createNativeStackNavigator();
export function RootContainer() {
  return (
    <stack.Navigator
      initialRouteName="signup"
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="signin" component={Signin} />
      <stack.Screen name="signup" component={Signup} />
      <stack.Screen name="auth" component={Authap} />
      <stack.Screen name="otp" component={Otp} />
      <stack.Screen name="conf" component={Confirm} />
    </stack.Navigator>
  );
}
