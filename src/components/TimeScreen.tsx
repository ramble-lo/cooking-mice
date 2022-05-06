import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const TimeScreen: React.FC = () => {
  return (
    <View style={[styles.container, {backgroundColor: '#5236FF'}]}>
      <TouchableOpacity onPress={() => console.log('a')}>
        <Text style={styles.timeText}>00:00</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 155,
    width: '100%',
  },
  timeText: {
    fontSize: 140,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default TimeScreen;
