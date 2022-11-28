import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GestureResponderEvent} from 'react-native';

export type datatype = {
  id: number;
  name: string;
  image: string;
  post: string;
  description: string;
  likecount: number;
  tags: Array<{id: number; name: string}>;
  callback?: (event: GestureResponderEvent) => void;
  move?: any;
};

export type RootStackParamList = {
  feed: undefined;
  profile: {id: number};
  addpost: undefined;
  discover: undefined;
};

export type StackProps = NativeStackScreenProps<RootStackParamList, 'profile'>;
