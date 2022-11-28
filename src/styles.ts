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
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 1.4,
  },
  flatlist: {
    marginTop: 80,
  },
  footer: {paddingBottom: 30},
  profileview: {
    padding: 20,
    flexDirection: 'row'
  },
  profile: {
    padding: 30
  },
  tag : {
    position: 'absolute',
    bottom: 5,
    left: 5
  },
  taglabel: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    padding: 5,
    elevation: 5,
    opacity: 0.7,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10
  },
});
export default styles;
