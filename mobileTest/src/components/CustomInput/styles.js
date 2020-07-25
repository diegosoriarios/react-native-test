import { LIGHT_COLOR } from '../../utils/colors'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    backgroundColor: LIGHT_COLOR,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})

export default styles