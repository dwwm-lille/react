import { Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function Item({ route, navigation }) {
    // A chaque fois qu'on ouvre un item, on change le titre du header par le nom de l'item
    useFocusEffect(() => {
        navigation.setOptions({ title: `Item ${route.params.number}` });
    });

    return (
        <Text style={{ fontSize: 64 }}>{route.params.number}</Text>
    )
}
