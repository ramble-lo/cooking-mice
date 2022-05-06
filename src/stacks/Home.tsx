import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterTab from '../components/FooterTab';
import KeyBoard from '../components/KeyBoard';
import TimeScreen from '../components/TimeScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../App';
type Props = NativeStackScreenProps<HomeStackParams, 'Home'>;

const Home: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.main}>
          <TimeScreen />
          <KeyBoard />
        </View>
        <FooterTab />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  main: {
    width: '100%',
  },
});

export default Home;
