import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  plus: {
    borderWidth: 1.8,
    borderRadius: 8,
    padding: -10,
  },
  imgname: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width/1.4,
  },
  flatlist: {
    marginTop: 80
  }
});
export default styles;
