import {FC} from 'react';
import {FlatList, Image, View} from 'react-native';
import {Avatar, IconButton, Text} from 'react-native-paper';
import dummydata, {datatype} from './dummydata';
import styles from './styles';

const Feed: FC = () => {
  return (
    <FlatList
      style={styles.flatlist}
      data={dummydata}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Feed;

const renderItem = ({item}: {item: datatype}) => {
  return <ItemComponent {...item} />;
};

const ItemComponent: FC<datatype> = props => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.imgname}>
          <Avatar.Image size={40} source={{uri: props.image}} />
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <IconButton icon="dots-vertical" />
      </View>

      <Image source={{uri: props.post}} style={styles.image} />

      {/* add action icon buttons */}
    </View>
  );
};
