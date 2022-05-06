import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {SettingStackParams} from '../../App';

type Props = NativeStackScreenProps<SettingStackParams, 'Setting'>;

const Setting: React.FC<Props> = ({navigation}: Props) => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default Setting;
