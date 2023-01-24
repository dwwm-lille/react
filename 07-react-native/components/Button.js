import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignSelf: 'center',
    borderRadius: 25,
  },
  content: {
    color: '#fff',
    fontSize: 28,
  }
});
