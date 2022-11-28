import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './feed';
import {GestureResponderEvent, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from './styles';
import Profile from './profile';
import {RootStackParamList} from './types';
import AddPost from './add';
import Discover from './discover';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          headerTransparent: true,
          animation: 'slide_from_right',
        }}
        initialRouteName="feed">
        <Stack.Screen
          name="feed"
          component={Feed}
          options={({navigation}) => ({
            title: 'Instagram',
            headerRight: () => (
              <HeaderRight
                onPress={(screen: string) => {
                  navigation.navigate(screen);
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="addpost" component={AddPost} />
        <Stack.Screen name="discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

interface HeaderProps {
  onPress: (screen: string) => void;
}

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
