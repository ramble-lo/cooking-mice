import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CardAdd: React.FC = () => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.cardTitleText}>+</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.colorPick}>
        <View style={styles.colorPickInside} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#5236FF',
    marginBottom: 14,
  },
  cardTitle: {
    // height: 120,
    // backgroundColor: '#5236FF',
  },
  cardTitleText: {
    fontSize: 64,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  colorPick: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5236FF',
  },
  colorPickInside: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
});

export default CardAdd;
