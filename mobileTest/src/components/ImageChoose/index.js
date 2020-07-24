import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

// import { Container } from './styles';

const ImageChoose = ({ image, onChangeImage }) => {
  return (
    <TouchableHighlight onPress={onChangeImage}>
      <Image source={{ uri: image }} style={{ borderRadius: 75, width: 150, height: 150 }} />
    </TouchableHighlight>
  );
}

export default ImageChoose;