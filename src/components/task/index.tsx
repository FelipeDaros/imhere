import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from "react";

type Props={
  name: string;
  onRemove: () => void;
}

export function Task({name, onRemove}: Props){
  const [isChecked, setChecked] = useState(false);
  return(
    <View style={styles.container}>
      <Checkbox 
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#4630EB' : undefined}
      />
      {isChecked ? <Text style={styles.nameCheck}>{name}</Text> : <Text style={styles.nameNotCheck}>{name}</Text>}
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Entypo name="trash" size={24} color='#808080' />
      </TouchableOpacity>
      
    </View>
  )
}