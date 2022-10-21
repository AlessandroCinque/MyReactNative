import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'

export default function App() {

  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask= () =>
  {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          To do List
        </Text>

        <View style={styles.items}>

          {
            taskItems.map((item,index) =>
            {
              return <Task key={index} text={item}/>
            })
          }
          <Task text={'boring task'}/>
          <Task text={'cool task'}/>
        </View>

      </View>

      <KeyboardAvoidingView behabiour={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'} value = {task} onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#DA8C7C' 
  },
  taskWrapper:
  {
    paddingTop: 80,
    paddingHorizontal:20
  },
  sectionTitle:
  {
    fontSize:24,
    fontWeight: 'bold'
  },
  items:
  {
    marginTop:30
  },
  writeTaskWrapper:
  {
    position:'absolute',
    bottom: 60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  input:
  {
    paddingVertical:15,
    paddingHorizontal :15,
    backgroundColor:'#fff',
    borderRadius: 60,
    borderColor:'#C0C0C0',
    borderWidth: 1,
    width: '75%',
  },
  addWrapper:
  {
    width: 60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',



  },
  addText:
  {

  }
});
