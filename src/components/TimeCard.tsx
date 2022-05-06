import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  name: string;
  onPress: () => void;
}
const TimeCard: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default TimeCard;
