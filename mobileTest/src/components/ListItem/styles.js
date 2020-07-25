import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    paddingVertical: 10
  },
  info: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    width: '50%'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 20
  },
  status: {
    width: 25,
    height: 25,
    borderRadius: 25,
  }
})

export default styles