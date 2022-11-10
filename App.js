import { StyleSheet, View } from 'react-native';

import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from "expo-font";
import { useState } from 'react';

export default function App() {

  const [loaded] = useFonts({
    LoraItalic: require('./assets/fonts/Lora-Italic-VariableFont_wght.ttf'),
    LoraFont: require('./assets/fonts/Lora-VariableFont_wght.ttf'),
  })
  
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  if(!loaded) {
    return null
  }


  return (
    <View style={styles.container}>      
      <Header title={"Adivina el número"} newStyles={{fontFamily: 'LoraItalic'}} />     
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,       
  }

});
