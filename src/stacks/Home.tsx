import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {HomeStackParams} from '../../App';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<HomeStackParams, 'Home'>;

const Home: React.FC<Props> = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text>Home page</Text>
            <Text>This is Home page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('a')}>
            <Text>go to setting</Text>
          </TouchableOpacity>
          <Button
            title={'to Home page'}
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title={'to Setting page'}
            onPress={() => navigation.navigate('Setting')}
          />
          <Button
            title={'to CardBox page'}
            onPress={() => navigation.navigate('CardBox')}
          />
        </View>
        <View style={styles.bottomTab}>
          <TouchableOpacity onPress={() => console.log('a')}>
            <FontAwesomeIcon icon={faCog} size={24} color={'#494949'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('a')}
            style={styles.carouselDot}
          />
          <TouchableOpacity onPress={() => console.log('a')}>
            <FontAwesomeIcon icon={faList} size={24} color={'#494949'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  bottomTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 24,
  },
  carouselDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#494949',
    // backgroundColor: '#C4C4C4',
  },
});

export default Home;
