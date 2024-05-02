import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useReducer} from 'react';

const listener = (state: any, action: any) =>{
  switch (action.type) {
    case 'add-new-task':
      return{
        tasks:[... state.tasks, {name:action.inputValue, isDone:false}]
      }
    default:
      break;
  }
}

export default function App() {

  const [state, dispatch] = useReducer(listener, {tasks:[]})

  const [inputValue, setInputValue] = useState("")

  const handleAddTask = () => {
    dispatch({type:'add-new-task', inputValue})
  }

  return (
    
    <View style={styles.container}>
      
      <View style={styles.buttonContent}>

        <TextInput style={styles.TextInputStyle}
        placeholder='Adicione uma tarefa.'
        value={inputValue}
        onChangeText={(text)=> setInputValue(text)}>

        </TextInput>

        <TouchableOpacity style={styles.buttonStyle} onPress={handleAddTask}>

          <Text style={{fontSize: 18, color:'white', textAlign:'center', padding:1}}>
            ADICIONAR TAREFA
          </Text>

        </TouchableOpacity>
        
      </View>
        
      {state?.tasks.map((task: any) => <Text style={{fontSize:18,
         marginTop:32,
         padding:8,
         borderWidth:1,
         borderRadius:20}}>{task.name}</Text>)}
         
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection:'row'
  },
  buttonStyle: {
   backgroundColor:'blue',
   height:50,
   width:150,
   borderRadius:60
  },
  TextInputStyle: {
   backgroundColor:'white',
   borderColor:'grey',
   borderWidth:1,
   marginEnd:15,
   height:50,
   width:150,
   borderRadius:60,
   textAlign:'center'
  }
});
