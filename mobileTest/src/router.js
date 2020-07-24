import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProfileScreen, Settings } from './screens'
import IconLink from './components/IconLink/index';
import Loading from './components/Loading/index';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerLeft: () => <IconLink iconName={"settings"} page="Settings" />
        }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerRight: () => <IconLink iconName="message" page="Chat" />
        }} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chat" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;