import { PRIMARY_COLOR, LIGHT_COLOR } from '../../utils/colors'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 50,
    marginVertical: 50
  },
  buttonText: {
    color: LIGHT_COLOR,
    fontWeight: 'bold'
  }
})

export default styles