import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View,KeyboardAvoidingView, TextInput } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          To do List
        </Text>

        <View style={styles.items}>
          <Task text={'boring task'}/>
          <Task text={'cool task'}/>
        </View>

      </View>

      <KeyboardAvoidingView behabiour={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Write a task'}></TextInput>

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

  },
  input:
  {

  }
});
