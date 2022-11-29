import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../screens/feed';
import Profile from '../screens/profile';
import {RootStackParamList} from '../types';
import AddPost from '../screens/add';
import Discover from '../screens/discover';
import HeaderRight from '../components/headerright';


// declearing a native stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const Main: FC = () => {
  return (
    // creating a navigation container
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
          headerTransparent: true,
          animation: 'slide_from_right',
        }}
        initialRouteName="feed">
          {/* adding screens to stack navigator */}
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



