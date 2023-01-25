import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import OtherButton from './OtherButton';
import { useFocusEffect } from '@react-navigation/native';

const Simple = () => {
  let [count, setCount] = useState(0);
  let [increment, setIncrement] = useState(1);

  /* useEffect(() => {
    let timer = setInterval(() => {
      setCount((c) => c + increment);
      console.log(Date.now());
    }, 500);

    return () => {
      console.log('clear');
      clearInterval(timer);
    }
  }, [increment]); */ // Quand increment change, on refait le setinterval avec le nouveau increment

  useFocusEffect(useCallback(() => {
    let timer = setInterval(() => {
      setCount((c) => c + increment);
      console.log(Date.now());
    }, 500);

    return () => {
      console.log('clear');
      clearInterval(timer);
    }
  }, [increment]));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count} (+{increment})</Text>
      <OtherButton text="Changer incrémentation" color="blue" onPress={() => setIncrement(increment + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  },
});

export default Simple;
