import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/stacks/Home';
import SettingScreen from './src/stacks/Setting';
import CardBoxScreen from './src/stacks/CardBox';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from 'react-native';
export type RootStackParams = {
  HomeStack: any;
  SettingStack: {
    name: string;
  };
  CardBoxStack: {
    name: string;
  };
};
const RootStack = createNativeStackNavigator<RootStackParams>();
// const RootStack = createDrawerNavigator<RootStackParams>();

//--
export type HomeStackParams = {
  Home: undefined;
  Setting: undefined;
  CardBox: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeScreenStack = () => {
  return (
    // <HomeStack.Navigator
    //   initialRouteName="Home"
    //   screenOptions={() => ({
    //     headerShown: true,
    //     headerRight: () =>
    //       route.name === 'CardBox' && (
    //         <Button title={'edit'} onPress={() => console.log('a')} />
    //       ),
    //   })}>
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: true,
        headerRight: () => (
          <Button title={'edit'} onPress={() => console.log('a')} />
        ),
      })}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Setting" component={SettingScreenStack} />
      <HomeStack.Screen
        name="CardBox"
        component={CardBoxScreenStack}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
//--

//--
export type SettingStackParams = {
  Setting: undefined;
  Home: undefined;
};

const SettingStack = createNativeStackNavigator<SettingStackParams>();

const SettingScreenStack = () => {
  return (
    <SettingStack.Navigator
      initialRouteName="Setting"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
    </SettingStack.Navigator>
  );
};
//--

//--
export type CardBoxStackParams = {
  CardBox: undefined;
  Home: undefined;
};

const CardBoxStack = createNativeStackNavigator<CardBoxStackParams>();

const CardBoxScreenStack = () => {
  return (
    <CardBoxStack.Navigator
      initialRouteName="CardBox"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <CardBoxStack.Screen name="CardBox" component={CardBoxScreen} />
    </CardBoxStack.Navigator>
  );
};
//--

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="HomeStack"
          screenOptions={() => ({
            headerShown: false,
          })}>
          <RootStack.Screen name="HomeStack" component={HomeScreenStack} />
          <RootStack.Screen
            name="SettingStack"
            component={SettingScreenStack}
          />
          <RootStack.Screen
            name="CardBoxStack"
            component={CardBoxScreenStack}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export {App};
