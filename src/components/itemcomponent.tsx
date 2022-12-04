import {FC, useRef, useState} from 'react';
import {
  View,
  Pressable,
  ToastAndroid,
  Platform,
  Animated,
  useWindowDimensions,
  PanResponder,
} from 'react-native';
import {Avatar, IconButton, Text} from 'react-native-paper';
import styles from '../styles';
import {datatype} from '../types';
import Icon from 'react-native-vector-icons/Ionicons';
import Tag from './tag';

export const ItemComponent: FC<datatype> = props => {
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const dim = useWindowDimensions();

  const scale = useRef(new Animated.Value(1)).current;

  const pointDistance = ([xA, yA]: Array<number>, [xB, yB]: Array<number>) => {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const gestureCount = evt.nativeEvent.changedTouches.length;
        if (gestureCount === 1) {
          pan.setValue({
            x: gestureState.dx,
            y: gestureState.dy,
          });
        } else if (gestureCount >= 2) {
          const points = evt.nativeEvent.changedTouches;

          const t1 = points[0];
          const t2 = points[1];

          const dist = pointDistance(
            [t1.pageX, t1.pageY],
            [t2.pageX, t2.pageY],
          );

          const panval = dist / dim.width;

          scale.setValue(1 + panval * 2);
        }
      },
      onPanResponderRelease: () => {
        Animated.parallel([
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]).start();
      },
    }),
  ).current;
  // props object contains the details of the person and his/her post
  const [liked, setLiked] = useState(false);
  const [lastTap, setLastTap] = useState(new Date());
  const [saved, setSaved] = useState(false);

  const [showTag, setShowTag] = useState(false);

  const like = () => {
    setLiked(prev => !prev);
  };

  // This function is to check for the tap and double tap on the image to show tags and like the post
  const pressEvent = () => {
    setLastTap(new Date());
    if (new Date().getTime() - lastTap.getTime() < 250) {
      setLiked(true);
    } else {
      showtags();
    }
  };

  // callback for the save icon button
  const save = () => {
    setSaved(prev => {
      if (!prev && Platform.OS == 'android') {
        ToastAndroid.show('Post saved!', 500);
      }
      return !prev;
    });
  };

  // callback altering the variable deciding whether to show the tag or not
  const showtags = () => {
    setShowTag(prev => !prev);
  };

  return (
    <View>
      {/* dp, name and options icon view */}
      <View style={styles.header}>
        {/* dp and name view which on click takes to profile screen */}
        <Pressable onPress={props.callback} style={styles.imgname}>
          <Avatar.Image size={40} source={{uri: props.image}} />
          <Text style={styles.title}>{props.name}</Text>
        </Pressable>
        <IconButton icon="dots-vertical" />
      </View>

      {/* post view which is a pressable */}
      <Pressable onPress={pressEvent}>
        <Animated.Image
          source={{uri: props.post}}
          style={[
            styles.image,
            {
              transform: [{translateX: pan.x}, {translateY: pan.y}, {scale}],
            },
          ]}
          {...panResponder.panHandlers}
        />
        {props.tags.length ? (
          <>
            <Icon
              name="person-circle"
              size={20}
              color="black"
              style={styles.tag}
              onPress={showtags}
            />

            {showTag &&
              props.tags.map(tag => (
                // tag element to show individual tags on a post
                <Tag
                  key={tag.id}
                  {...tag}
                  callback={() => {
                    props.move(tag.id);
                  }}
                  style={{top: 60 * (tag.id + 1), left: 60 * (tag.id + 1)}} // dynamically setting the position of the tags based on their index
                />
              ))}
          </>
        ) : null}
      </Pressable>

      {/* view for action icon buttons (like, comment, share, save) */}
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
        // show like count if it is greater than zero
        <Text style={[styles.title, {marginTop: -10}]}>
          {/* adding extra like if the post is liked else get the default count from the data */}
          {liked ? props.likecount + 1 : props.likecount} likes
        </Text>
      ) : null}

      {/* show name with description of the post */}
      <Text style={{marginLeft: 10}} numberOfLines={3} ellipsizeMode="tail">
        <Text style={styles.title}>{props.name}</Text> {props.description}
      </Text>
    </View>
  );
};
