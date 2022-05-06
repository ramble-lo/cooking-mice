import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Button, SafeAreaView, StyleSheet} from 'react-native';
import {CardBoxStackParams} from '../../App';
import CardTitle from '../components/cardbox/CardTitle';
import CardList from '../components/cardbox/CardList';
import CardAdd from '../components/cardbox/CardAdd';

type Props = NativeStackScreenProps<CardBoxStackParams, 'CardBox'>;

const CardBox: React.FC<Props> = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CardTitle />
        <CardList navigation={navigation} />
        <CardAdd />
        <Button
          title={'to Home page'}
          onPress={() => navigation.navigate('Home')}
        />
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
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 24,
    paddingTop: 14,
  },
});

export default CardBox;
