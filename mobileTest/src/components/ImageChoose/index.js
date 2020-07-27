import React from 'react';
import { TouchableHighlight, Image, Platform, View } from 'react-native';
import styles from './styles'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { LIGHT_TEXT, LIGHT_COLOR } from '../../utils/colors';
Icon.loadFont();

const ImageChoose = ({ image, onChangeImage }) => {

  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const responseUri = Platform.OS === "android" ? response.uri : response.uri.replace('file://', '')
        const source = { uri: responseUri };

      onChangeImage(source.uri)
    }
    });
  }

  return (
    <TouchableHighlight onPress={chooseImage}>
      <>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.icon}>
          <Icon name="add-a-photo" size={30} color={LIGHT_COLOR} />
        </View>
      </>
    </TouchableHighlight>
  );
}

export default ImageChoose;