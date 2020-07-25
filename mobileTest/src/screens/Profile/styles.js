import { StyleSheet } from 'react-native' 
import { LIGHT_COLOR, DARK_TEXT, LIGHT_TEXT } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50
  },
  header: {
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: 'center'
  },
  list: {
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    height: '50%',
    marginBottom: 50,
    backgroundColor: LIGHT_COLOR
  },
  textName: {
    fontWeight: "bold",
    fontSize: 24,
    color: DARK_TEXT
  },
  textEmail: {
    fontWeight: "bold",
    fontSize: 14,
    color: LIGHT_TEXT
  },
  textDescription: {
    fontSize: 14,
    color: LIGHT_TEXT
  },
  socialDisplay: {
    display: 'flex',
    flexDirection: "row"
  }
})

export default styles