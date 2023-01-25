import { StyleSheet, Text, View } from 'react-native';

export default function Square({ color, number }) {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.text}>Square {number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
