import {FC} from 'react';
import {Text} from 'react-native-paper';
import {TagProps} from './types';
import styles from '../styles';

// tag component to show the tag on a post
const Tag: FC<TagProps> = ({name, id, callback, style}) => {
  const gotoprofile = () => {
    callback(id);
  };
  return (
    <Text onPress={gotoprofile} style={[styles.taglabel, {...style}]}>
      {name}
    </Text>
  );
};

export default Tag;