/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Ionicons} from 'react-native-vector-icons';
import { Pressable } from 'react-native';
import { styles } from './style';


export function MyCheckbox({onChange, checked}) {
    // const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => onChange(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}
