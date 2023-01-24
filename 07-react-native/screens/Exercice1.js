import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../style';
import SuperButton from '../components/Button';
import { StatusBar } from 'expo-status-bar';
import About from '../screens/About';

export default function Exercice1() {
  let [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <View style={[styles.square, { backgroundColor: '#7de1fa', justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Hello, world!</Text>
      </View>

      <SuperButton onPress={() => setCount(count + 1)}>Incrémenter {count}</SuperButton>
      <SuperButton onPress={() => console.log('SALUT')}>Salut</SuperButton>

      <About />

      <StatusBar style="dark" hidden={false} />
    </SafeAreaView>
  );
}
