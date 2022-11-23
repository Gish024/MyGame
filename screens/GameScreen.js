import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Card from '../components/Card';

const GameScreen = ({handleResult}) => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

       
  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <Text style={{ fontSize: 20, paddingTop: 10 }}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title="Menor" onPress={() => handleResult('lower', currentGuess)}/>
        <Button title="Mayor" onPress={() => handleResult('greater', currentGuess)}/>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: '60%',
    height: '15%',
  },

});