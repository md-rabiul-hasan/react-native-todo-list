import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Addtodoitem from './components/Addtodoitem';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    const afterRemoveTodo = todos.filter( todo => todo.key  != key)
    setTodos(afterRemoveTodo)
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      const key = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      const newItem = {text: text, key: key.toString()}
      const newtodos = [
        newItem, ...todos
      ];
      setTodos(newtodos)
    } else {
      Alert.alert('Opps !', 'Todo must be above 3 character',[
        { text: 'understood' }
      ])
    }
    
  }

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Addtodoitem submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={ ({item} ) => (
               <TodoItem item={item} pressHandler={pressHandler} />
              ) }
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content : {
    padding: 40
  },
  list : {
    marginTop: 20
  }
});
