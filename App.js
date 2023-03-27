/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authap from './Screens/Authap';
import Confirm from './Screens/ConfirmPass';
import Otp from './Screens/Otp';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';

const stack = createNativeStackNavigator();
function RootContainer() {
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

function App() {
  return (
    <NavigationContainer>
      <RootContainer />
    </NavigationContainer>
  );
}

export default App;
