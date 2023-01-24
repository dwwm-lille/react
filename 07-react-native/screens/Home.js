import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, TouchableHighlight, View } from 'react-native';
import styles from '../style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.blue]}>Fiorella</Text>
      <Image source={require('../assets/favicon.png')}
          style={{ width: 100, height: 100, marginTop: 40 }} />
      <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' }}
          style={{ width: 150, height: 150 }} />

      <Button title="Bonjour" onPress={() => alert('Salut Fiorella')} />

      <TouchableHighlight style={styles.btn} underlayColor="red" onPress={() => alert('Mon bouton')}>
        <Text style={{ color: '#fff', fontSize: 22 }}>Mon Bouton</Text>
      </TouchableHighlight>

      <StatusBar style="auto" hidden={false} />
    </View>
  )
}
