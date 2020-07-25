import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import styles from './styles'

const ImageChoose = ({ image, onChangeImage }) => {
  return (
    <TouchableHighlight onPress={onChangeImage}>
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableHighlight>
  );
}

export default ImageChoose;