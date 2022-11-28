import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './feed';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import styles from './styles'

const Stack = createNativeStackNavigator();

const Main: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{statusBarTranslucent: true, statusBarColor: 'transparent', headerTransparent: true}}>
        <Stack.Screen name="feed" component={Feed} options={{title: 'Instagram', headerRight: () => <HeaderRight />}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;


const HeaderRight: FC = () => {
    return (
        <View style={styles.right}>
            <IconButton icon='plus' style={styles.plus} size={18} />
            <IconButton icon='message-outline' size={30}  />
        </View>
    )
}