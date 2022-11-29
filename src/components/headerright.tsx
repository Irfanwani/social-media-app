import {FC} from 'react';
import {HeaderProps} from './types';
import {View} from 'react-native';
import styles from '../styles';
import {IconButton} from 'react-native-paper';

const HeaderRight: FC<HeaderProps> = ({onPress}) => {
  const gotoadd = () => {
    onPress('addpost');
  };

  const gotodiscover = () => {
    onPress('discover');
  };
  return (
    <View style={styles.right}>
      <IconButton icon="plus" style={styles.plus} size={18} onPress={gotoadd} />
      <IconButton
        icon="magnify"
        size={30}
        style={{opacity: 0.8}}
        onPress={gotodiscover}
      />
    </View>
  );
};

export default HeaderRight;
