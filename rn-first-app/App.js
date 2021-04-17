import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('М. Нандинзаяа та')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title='Над дээр дарна уу!' onPress={() => setOutputText('Хайртай шүү!')} />
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
});
