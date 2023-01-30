import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function Pokemons({ navigation }) {
    let [pokemons, setPokemons] = useState([]);
    let [loading, setLoading] = useState(false);
    let [generation, setGeneration] = useState(1);

    useFocusEffect(useCallback(() => {
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/151').then(response => {
            setPokemons(response.data);
            console.log(Date.now());
        });
    }, [])); // Attention au cycle de vie

    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Pokemon', { pokemon: item })}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                    <Text style={{ fontSize: 30 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const Header = () => {
        return (
            loading && <Text style={{ fontSize: 24 }}>
                Chargement génération {generation}...
            </Text>
        );
    }

    const fetchPokemons = () => {
        setLoading(true); // On fait apparaitre le loader quand on "pull"
        let generation = Math.ceil(Math.random() * 8); // Random entre 1 et 8
        setGeneration(generation);
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/generation/' + generation).then(response => {
            setPokemons(response.data);
            setLoading(false); // On fait disparaitre le loader
        });
    }

    return (
        <FlatList
            data={pokemons}
            renderItem={ItemView}
            ListHeaderComponent={Header}
            onRefresh={() => fetchPokemons()}
            refreshing={loading}
        />
    )
}
