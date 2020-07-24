import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Image } from './styles';

const ImageChoose = ({ image, onChangeImage }) => {
  return (
    <TouchableHighlight onPress={onChangeImage}>
      <Image source={{ uri: image }} />
    </TouchableHighlight>
  );
}

export default ImageChoose;