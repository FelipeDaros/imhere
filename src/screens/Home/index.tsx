import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header';
import { Task } from '../../components/task';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons'; 


export default function Home() {
  //const participants = ['Felipe'];
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleParticipantAdd(){
    if(tasks.includes('Lucas')){
      return Alert.alert('Participante existe', 'Já existe um participante com esse nome!');
    }

    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Adicionar uma nova tarefa"
        placeholderTextColor="#6B6b6b"
        onChangeText={setTaskName}
        value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.results}>
        <Text style={styles.textResultsLeft}>Criadas</Text>
        <Text style={styles.textResultsRight}>Concluídas</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={taks => taks}
        renderItem={({item}) => (
          <Task name={item} key={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View style={styles.listEmpty}>
              <FontAwesome name="wpforms" size={24} color="#808080" />
              <Text style={styles.listEmptyTextOne}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.listEmptyTextTwo}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          </>
        )}
      />
    </View>
  );
}