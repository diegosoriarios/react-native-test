import React from 'react';

import { TouchableOpacity, Image } from 'react-native';
import styles from './styles'

const GridItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.grid}>
      <Image style={styles.gridImage} source={{ uri: item.url }} />
    </TouchableOpacity>
  );
}

export default GridItem;