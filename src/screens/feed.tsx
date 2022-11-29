import {FC} from 'react';
import {FlatList, View} from 'react-native';
import dummydata from '../dummydata';
import styles from '../styles';
import {ItemComponent} from '../components/itemcomponent';
import {datatype} from '../types';
import { FeedProps } from './types';


const Feed: FC<FeedProps> = ({navigation}) => {
  // defining render item for flatlist which will show the posts
  const renderItem = ({item}: {item: datatype}) => {
    // defining callback for navigating to profile
    const callback = () => {
      navigation.navigate('profile', {id: item.id});
    };
    const move = (id: number) => {
      navigation.navigate('profile', {id});
    };
    // returning the item component to show the details 
    return <ItemComponent {...item} callback={callback} move={move} />;
  };

  return (
    <FlatList
      style={styles.flatlist}
      data={dummydata}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default Feed;
