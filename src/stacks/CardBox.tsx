import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {CardBoxStackParams} from '../../App';

type Props = NativeStackScreenProps<CardBoxStackParams, 'CardBox'>;

const CardBox: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>CardBox page</Text>
        <Text>This is CardBox page</Text>
        <Button
          title={'to Home page'}
          onPress={() => navigation.navigate('Home')}
        />
        {/* <TimeCard name={'Time Card 01'} onPress={()=> navigation.navigate('Home')}/> */}
      </TouchableOpacity>
    </View>
  );
};

export default CardBox;
