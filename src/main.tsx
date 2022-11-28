import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './feed';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from './styles';
import Profile from './profile';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          headerTransparent: true,
        }}
        initialRouteName="feed">
        <Stack.Screen
          name="feed"
          component={Feed}
          options={{title: 'Instagram', headerRight: () => <HeaderRight />}}
        />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const HeaderRight: FC = () => {
  return (
    <View style={styles.right}>
      <IconButton icon="plus" style={styles.plus} size={18} />
      <IconButton icon="magnify" size={30} style={{opacity: 0.8}} />
    </View>
  );
};
