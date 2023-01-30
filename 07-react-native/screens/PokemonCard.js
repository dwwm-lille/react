import { Image, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import Item from './Item';

export default function PokemonCard({ navigation, route }) {
    let pokemon = route.params.pokemon;

    useEffect(() => {
        navigation.setOptions({ title: pokemon.name });
    });

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{pokemon.name} ({pokemon.id})</Text>
            <Image source={{ uri: pokemon.image }} style={{ width: 250, height: 250 }} />

            <View style={{ borderWidth: 1, borderColor: 'lightgrey', padding: 20 }}>
                <Text style={[styles.stats, {
                    color: pokemon.stats.HP > 70 ? 'green' : 'red'
                }]}>- HP : {pokemon.stats.HP}</Text>
                <Text style={styles.stats}>- Attaque : {pokemon.stats.attack}</Text>
                <Text style={styles.stats}>- Défense : {pokemon.stats.defense}</Text>
            </View>

            {/* Types du pokémon */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {pokemon.apiTypes.map((type) =>
                    <>
                        <Text style={styles.stats}>{type.name}</Text>
                        <Image source={{ uri: type.image }} style={{ width: 50, height: 50 }} />
                    </>
                )}
            </View>

            {/* Evolutions du pokémon */}
            <View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { height: 2 },
        elevation: 2,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    stats: {
        fontSize: 24
    },
});
