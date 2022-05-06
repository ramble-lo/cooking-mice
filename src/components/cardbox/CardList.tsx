import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animate, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const LIST_ITEM_HEIGHT = 120;

const CardTime: React.FC = () => {
  const translateX = useSharedValue(0);

  const pnaGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      translateX.value = withTiming(0);
    },
  });
  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  return (
    <View style={styles.cardTime}>
      <View style={styles.iconLeft}>
        <FontAwesomeIcon
          icon={faTrash as IconProp}
          size={40}
          color={'#FF453A'}
        />
      </View>
      <View style={styles.iconRight}>
        <FontAwesomeIcon
          icon={faEllipsisV as IconProp}
          size={40}
          color={'#A5A5A5'}
        />
      </View>
      <PanGestureHandler onGestureEvent={pnaGesture}>
        <Animate.View style={rStyle}>
          <View style={styles.card}>
            <Text style={styles.cardTitleText}>00:00</Text>
          </View>
        </Animate.View>
      </PanGestureHandler>
    </View>
  );
};

const CardList: React.FC = () => {
  return (
    <View style={styles.box}>
      <CardTime />
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
  cardTime: {},
  iconLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: LIST_ITEM_HEIGHT,
    height: LIST_ITEM_HEIGHT,
    position: 'absolute',
    left: 0,
  },
  iconRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: LIST_ITEM_HEIGHT,
    height: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: 0,
  },
});

export default CardList;
