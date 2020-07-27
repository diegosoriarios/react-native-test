import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/colors';

const styles = StyleSheet.create({
  image: {
    margin: 25,
    borderRadius: 75,
    width: 150,
    height: 150
  },
  icon: {
    right: 25,
    position: "absolute",
    bottom: 25,
    padding: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  }
})

export default styles