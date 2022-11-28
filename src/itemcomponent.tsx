import {FC, useState} from 'react';
import {View, Pressable, Image, ToastAndroid, Platform} from 'react-native';
import {Avatar, IconButton, Text} from 'react-native-paper';
import styles from './styles';
import {datatype} from './types';
import Icon from 'react-native-vector-icons/Ionicons';

export const ItemComponent: FC<datatype> = props => {
  const [liked, setLiked] = useState(false);
  const [lastTap, setLastTap] = useState(new Date());
  const [saved, setSaved] = useState(false);

  const like = () => {
    setLiked(prev => !prev);
  };

  const pressEvent = () => {
    setLastTap(new Date());
    if (new Date().getTime() - lastTap.getTime() < 250) {
      setLiked(true);
    }
  };

  const save = () => {
    setSaved(prev => {
      if (!prev && Platform.OS == 'android') {
        ToastAndroid.show('Post saved!', 500);
      }
      return !prev;
    });
  };

  const showtags = () => {

  }

  
  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={props.callback} style={styles.imgname}>
          <Avatar.Image size={40} source={{uri: props.image}} />
          <Text style={styles.title}>{props.name}</Text>
        </Pressable>
        <IconButton icon="dots-vertical" />
      </View>
      <Pressable onPress={pressEvent}>
        <Image source={{uri: props.post}} style={styles.image} />
        {props.tags.length ? (
          <Icon
            name="person-circle"
            size={20}
            color="black"
            style={styles.tag}
            onPress={showtags}
          />
        ) : null}
      </Pressable>

      <View style={styles.header}>
        <View style={styles.imgname}>
          <IconButton
            onPress={like}
            icon={liked ? 'heart' : 'heart-outline'}
            size={28}
            animated
            color={liked ? '#dd2222' : 'black'}
          />
          <IconButton icon="comment-outline" size={25} animated />
          <IconButton icon="send-outline" size={25} animated />
        </View>
        <IconButton
          onPress={save}
          icon={saved ? 'bookmark' : 'bookmark-outline'}
          size={28}
          animated
        />
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
