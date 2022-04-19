import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/stacks/Home';
import SettingScreen from './src/stacks/Setting';
import CardBoxScreen from './src/stacks/CardBox';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
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
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Setting" component={SettingScreen} />
      <HomeStack.Screen name="CardBox" component={CardBoxScreen} />
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
    <SettingStack.Navigator initialRouteName="Setting">
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
    <CardBoxStack.Navigator initialRouteName="CardBox">
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
