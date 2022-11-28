import {FC, useState} from 'react';
import {FlatList, Image, Pressable, View} from 'react-native';
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
  const [liked, setLiked] = useState(false);
  const [lastTap, setLastTap] = useState(new Date());

  const like = () => {
    setLiked(prev => !prev);
  };

  const pressEvent = () => {
    setLastTap(new Date());
    if (new Date().getTime() - lastTap.getTime() < 250) {
      setLiked(true);
    }
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.imgname}>
          <Avatar.Image size={40} source={{uri: props.image}} />
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <IconButton icon="dots-vertical" />
      </View>
      <Pressable onPress={pressEvent}>
        <Image source={{uri: props.post}} style={styles.image} />
      </Pressable>

      <View style={styles.header}>
        <View style={styles.imgname}>
          <IconButton
            onPress={like}
            icon={liked ? 'heart' : 'heart-outline'}
            size={28}
            animated
            color={liked ? '#ff2222' : 'black'}
          />
          <IconButton icon="comment-outline" size={25} animated />
          <IconButton icon="send-outline" size={25} animated />
        </View>
        <IconButton icon="bookmark-outline" size={28} animated />
      </View>
      {props.likecount ? (
        <Text style={[styles.title, {marginTop: -10}]}>
          {liked ? props.likecount + 1 : props.likecount} likes
        </Text>
      ) : null}

      <Text style={{marginLeft: 10}} numberOfLines={3} ellipsizeMode="tail">
        <Text style={styles.title}>{props.name}</Text> {props.description}
      </Text>
    </View>
  );
};
