import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProfileScreen, Login, Settings, Error, Splashscreen } from './screens'
import IconLink from './components/IconLink/index';
import Loading from './components/Loading/index';
import { navigationOptions } from './utils/navigationOptions';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splashscreen" component={Splashscreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerStyle: navigationOptions.noHeader,
        }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle: navigationOptions.noHeader,
          headerLeft: () => <IconLink iconName={"settings"} page="Settings" />,
        }} />
        <Stack.Screen name="Settings" component={Settings} options={{
          headerStyle: navigationOptions.noHeader,
        }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerStyle: navigationOptions.noHeader,
          headerRight: () => <IconLink iconName="message" page="Chat" />
        }} />
        <Stack.Screen name="Chat" component={Loading} options={{
          headerStyle: navigationOptions.noHeader,
        }} />
        <Stack.Screen name="Error" component={Error} options={{
          headerStyle: navigationOptions.noHeader,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;