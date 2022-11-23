import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import lose from '../assets/gameOver.jpg';
import win from '../assets/win.jpg';

const ResultScreen = ({result}) => {
    const [image, setImage] = useState('');

    useEffect(() => {
       handleImage()
    }, [])

    const handleImage = () => {
        if(result === "win") {
            setImage(win);
            return;
        } 
        setImage(lose);   
    };

  return (
    <View style={styles.container}>
      <Image 
        style={styles.imageContainer}
        source={image}
      />
      <Card>
        <Text style={{ fontWeight: 'bold' }}>{`You ${result}!`}</Text>
      </Card>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: '80%',
        width: '100%',
        marginBottom: 50,
    },

});