// import { Props } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const NumberButton: React.FC<{value: number | string}> = ({value}) => {
  let size = 96;
  if (typeof value === 'string') {
    size = 40;
  }
  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={() => console.log('a')}
        style={styles.buttonArea}>
        <Text style={[styles.buttonText, {fontSize: size}]}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Keyboard: React.FC = () => {
  const DATA: (string | number)[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    '開始',
    0,
    '腳本',
  ];
  return (
    <View style={styles.container}>
      {/* <FlatList
        style={styles.layout}
        data={DATA}
        renderItem={Button}
        keyExtractor={index => index.toString()}
      /> */}
      <View style={styles.layout}>
        {DATA.map(value => {
          return (
            <>
              <NumberButton value={value} key={value} />
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // width: 375,
    // minWidth: 375,
    width: '100%',
  },
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  button: {
    width: 125,
    height: 125,
  },
  buttonArea: {
    width: 125,
    height: 125,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },
  buttonText: {
    fontSize: 96,
    fontWeight: '500',
    color: '#494949',
  },
});

export default Keyboard;
