import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function Pokemons({ navigation }) {
    let [pokemons, setPokemons] = useState([]);
    let [loading, setLoading] = useState(false);
    let [generation, setGeneration] = useState(1);
    let [search, setSearch] = useState('');

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
            <View>
                {loading && <Text style={{ fontSize: 24 }}>
                    Chargement génération {generation}...
                </Text>}
            </View>
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

    let filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(search));

    return (
        <View style={{ marginBottom: 110 }}>
            <TextInput style={{
                height: 50, fontSize: 22, backgroundColor: '#fff',
                marginHorizontal: 30, marginVertical: 30, padding: 10
            }} placeholder="Chercher un pokémon..."
               defaultValue={search}
               onChangeText={(value) => setSearch(value)}
               onSubmitEditing={(event) => setSearch(event.nativeEvent.text)}
            />

            <FlatList
                data={filteredPokemons}
                renderItem={ItemView}
                ListHeaderComponent={Header}
                onRefresh={() => fetchPokemons()}
                refreshing={loading}
            />
        </View>
    )
}
