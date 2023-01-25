import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const OtherButton = ({ style, text, color, onPress }) => {
  return (
    <TouchableHighlight activeOpacity={0.5} underlayColor="#fff" onPress={onPress}>
      <View style={[styles.button, style, { backgroundColor: color || 'red' }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    color: '#fff',
    fontSize: 28,
  },
});

export default OtherButton;
