import {FC} from 'react';
import {FlatList, View} from 'react-native';
import dummydata from './dummydata';
import styles from './styles';
import {ItemComponent} from './itemcomponent';
import {datatype, StackProps} from './types';

interface FeedProps {
  navigation: StackProps['navigation'];
}

const Feed: FC<FeedProps> = ({navigation}) => {
  const renderItem = ({item}: {item: datatype}) => {
    const callback = () => {
      navigation.navigate('profile', {id: item.id});
    };
    return <ItemComponent {...item} callback={callback} />;
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
