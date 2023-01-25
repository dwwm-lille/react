import { View } from 'react-native';
import { useState } from 'react';
import Counter from '../components/Counter';
import OtherButton from '../components/OtherButton';
import Simple from '../components/Simple';
import Square from '../components/Square';

export default function Exercice2() {
  let [show, setShow] = useState(false);

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <OtherButton style={{ marginVertical: 20 }} text="Bonjour" color="red" onPress={() => alert('Bonjour')} />
      <OtherButton text="Au revoir" color="blue" onPress={() => alert('Au revoir')} />

      <Counter start={40} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Square color="#7de0f9" number="1" />
        <Square color="#4dc3c3" number="2" />
        <Square color="#f2637d" number="3" />
      </View>

      <OtherButton text="Afficher / cacher" color="blue" onPress={() => setShow(!show)} />
      {show && <Simple />}
    </View>
  );
}
