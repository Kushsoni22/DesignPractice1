/* eslint-disable prettier/prettier */
import {useState} from 'react';

export const useTogglePasswordVisibility1 = () => {
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [rightIcon1, setRightIcon1] = useState('eye-off');

  const handlePasswordVisibility1 = () => {
    if (rightIcon1 === 'eye') {
      setRightIcon1('eye-off');
      setPasswordVisibility1(!passwordVisibility1);
    } else if (rightIcon1 === 'eye-off') {
      setRightIcon1('eye');
      setPasswordVisibility1(!passwordVisibility1);
    }
  };

  return {
    passwordVisibility1,
    rightIcon1,
    handlePasswordVisibility1,
  };
};
