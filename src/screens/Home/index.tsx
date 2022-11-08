import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/participant';
import { styles } from './style';

export default function Home() {
  const participants = ['Felipe', 'Diego', 'Marciel'];
  
  function handleParticipantAdd(){
    console.log("ADD ");
  }

  function handleParticipantRemove(name: string){
    console.log("REMOVE", name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {
        participants.map(participant => (
          <Participant name={participant} onRemove={() => handleParticipantRemove("Lucas")}/>
        ))
      }
    </View>
  );
}