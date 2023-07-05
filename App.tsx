import { StatusBar } from 'expo-status-bar';
import { Button,Container, Footer, Input,SwitchButton,TaskList } from './style';
import { useState } from 'react';
import { TaskProps } from './types';
import { MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import { GenerateUUID } from './module/generateUUID';
import TaskCard from './components/TaskCard';

export default function App() {
  const [task,setTask] = useState('')
  const [lightMode,setLightMode] = useState(true)
  const [tasks, setTasks] = useState<TaskProps[]>([])
  
  const createTask = () =>{
    if(task){
      const id = GenerateUUID();
      setTasks(prev=>[...prev,{
        id,
        title: task,
        created_at: new Date()
      }])
      setTask('')
    }
    
  }
  return (
    <Container lightMode={lightMode}>
      <StatusBar style="auto" />
      <SwitchButton activeOpacity={.8} onPress={()=>setLightMode(prev=>!prev)}>
        <Ionicons name={lightMode ? 'moon':'sunny'} size={32} color={lightMode ? '#000':'#ffff00'}/>
      </SwitchButton>
      <TaskList contentContainerStyle={{
        paddingHorizontal: 15
      }} data={tasks} renderItem={({item}:{item:TaskProps})=>(
        <TaskCard lightMode={lightMode} task={item}/>
      )}/>
      <Footer>
        <Input
        lightMode={lightMode}
        placeholderTextColor={'#ccc'} 
        value={task} onChangeText={setTask}
        placeholder='Tarefa...'
        onSubmitEditing={createTask}/>
        <Button activeOpacity={.9} onPress={createTask}>
          <MaterialCommunityIcons name='plus' color={'#fff'} size={22}/>
        </Button> 
      </Footer>
    </Container>
  );
}
