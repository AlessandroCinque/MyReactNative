import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

  },
});
