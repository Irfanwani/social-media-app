import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GestureResponderEvent} from 'react-native';

export type datatype = {
  id: number;
  name: string;
  image: string;
  post: string;
  description: string;
  likecount: number;
  callback?: (event: GestureResponderEvent) => void;
};

export type RootStackParamList = {
  feed: undefined;
  profile: {id: number};
};

export type StackProps = NativeStackScreenProps<RootStackParamList, 'profile'>;
