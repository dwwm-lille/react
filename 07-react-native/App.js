import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import styles from './style';
import SuperButton from './components/Button';
import { useState } from 'react';
import About from './screens/About';

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      {/*<View style={styles.container}>
        <Text style={[styles.title, styles.blue]}>Fiorella</Text>
        <Image source={require('./assets/favicon.png')}
              style={{ width: 100, height: 100, marginTop: 40 }} />
        <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' }}
              style={{ width: 150, height: 150 }} />

        <Button title="Bonjour" onPress={() => alert('Salut Fiorella')} />

        <TouchableHighlight style={styles.btn} underlayColor="red" onPress={() => alert('Mon bouton')}>
          <Text style={{ color: '#fff', fontSize: 22 }}>Mon Bouton</Text>
        </TouchableHighlight>

        <StatusBar style="auto" hidden={false} />
      </View>*/}

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
