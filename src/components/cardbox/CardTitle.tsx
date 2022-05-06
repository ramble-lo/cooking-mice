import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

const CardTitle: React.FC = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>編輯倒數器</Text>
      <TouchableOpacity onPress={() => console.log('a')}>
        <FontAwesomeIcon
          icon={faEdit as IconProp}
          size={24}
          color={'#494949'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 24,
  },
  titleText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#494949',
  },
});

export default CardTitle;
