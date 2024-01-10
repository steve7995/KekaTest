import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView  } from 'react-native';
import Task from './Components/Task';
import { useState } from 'react';
export default function App() {
  const [task,setTask] = useState(null);
  const [taskitems,setTaskItems] = useState(['Morning gym session ','spend 4 hrs coding']);
  const HandleTask = ()=>{
    setTaskItems([...taskitems,task])
    setTask(null)
  };
  const DeleteTask = (index)=>{
    let itemsCopy = [...taskitems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      {/* TodaysTasks */}
      <View style={styles.TaskWrapper}>
        <Text style={styles.SectionHeading}>Today's tasks</Text>
        <View style={styles.TaskItems}>
          {/* mytasks */}
            {
              taskitems.map((item,index)=>{
                return (
                  <TouchableOpacity key={index}  onPress={() => DeleteTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
                )
              })
            }
        </View>
      </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.os === "ios" ? "padding" : "height"} style={styles.writeTasksWrapper}>
        <TextInput placeholder={'enter your task'} value={task} style={styles.TaskInput}  onChangeText={text=>setTask(text)}/>
        <TouchableOpacity onPress={HandleTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: 80,
    paddingHorizontal: 20
  },
  TaskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  SectionHeading: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  TaskItems: {
    marginTop: 20
  },
  writeTasksWrapper: {
    position:'absolute',
    bottom:60,
    margin: 35,
    gap:5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  TaskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  plus: {
    fontSize: 24,
  },
});
