import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {SettingStackParams} from '../../App';

type Props = NativeStackScreenProps<SettingStackParams, 'Setting'>;

const Setting: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Setting page</Text>
        <Text>This is Setting page</Text>
        <Button
          title={'to Home page'}
          onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
