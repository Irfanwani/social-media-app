import {FC} from 'react';
import {View} from 'react-native';
import {Avatar, HelperText, Text} from 'react-native-paper';
import dummydata from '../dummydata';
import styles from '../styles';
import {StackProps} from '../types';

type ProfileProps = {
  route: StackProps['route'];
};

const Profile: FC<ProfileProps> = ({route}) => {
  const {id} = route.params;

  return (
    <>
      {/* main profile view which shows the dp and name of the person with id as the id received from route params */}
      <View style={[styles.profileview, styles.flatlist]}>
        <Avatar.Image source={{uri: dummydata[id - 1].image}} size={150} />
        <View style={styles.profile}>
          <Text style={styles.title}>{dummydata[id - 1].name}</Text>
        </View>
      </View>
      <HelperText type="info">More details will show here</HelperText>
    </>
  );
};

export default Profile;
