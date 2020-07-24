import React from 'react';
import { Button, Buttontext } from './styles';

const CustomButton = ({ text, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Buttontext>{text}</Buttontext>
    </Button>
  )
}

export default CustomButton;