import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faList} from '@fortawesome/free-solid-svg-icons/faList';
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog';
import {HomeStackParams} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// type stackProps = NativeStackScreenProps<HomeStackParams>;
type footerTabProps = StackNavigationProp<HomeStackParams>;

const FooterTab: React.FC = () => {
  const navigation = useNavigation<footerTabProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <FontAwesomeIcon icon={faCog as IconProp} size={24} color={'#494949'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('a')}
        style={styles.carouselDot}
      />
      <TouchableOpacity onPress={() => navigation.navigate('CardBox')}>
        <FontAwesomeIcon
          icon={faList as IconProp}
          size={24}
          color={'#494949'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 24,
    paddingTop: 14,
  },
  carouselDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#494949',
    // backgroundColor: '#C4C4C4',
  },
});

export default FooterTab;
