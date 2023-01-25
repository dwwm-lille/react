import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OtherButton from './OtherButton';

const Counter = ({ start }) => {
  let [count, setCount] = useState(start || 0);

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.button, { marginHorizontal: 20 }]}>{count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 10 }}>
        Vous avez cliqué sur le bouton {count} fois
      </Text>
      <OtherButton text={`Cliquer (${count} fois)`} onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
  },
  button: {
    fontSize: 50,
  },
});

export default Counter;
