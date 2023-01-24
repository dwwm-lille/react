import { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default function About() {
  let [loading, setLoading] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/2427947' }} style={styles.avatar} />
        <View>
          <Text style={styles.title}>Matthieu Mota</Text>
          <Text style={styles.fs(20)}>Développeur <Text style={{ textDecorationLine: 'line-through' }}>web</Text> mobile</Text>
        </View>
      </View>

      <Button onPress={() => setLoading(!loading)}>
        {loading ? 'Masquer' : 'Afficher'}
      </Button>
      {loading && <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    flexDirection: 'row',
  },
  title: {
    fontSize: 40,
  },
  // On peut avoir une fonction qui retourne directement le style
  fs: (fontSize) => ({ fontSize }),
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    marginRight: 25,
  },
});
