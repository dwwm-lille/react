import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Exercice1 from './screens/Exercice1';
import Exercice2 from './screens/Exercice2';
import Home from './screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import Item from './screens/Item';
import List from './screens/List';
import Pokemons from './screens/Pokemons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTitleAlign: 'left',
      tabBarStyle: styles.tab,
      // tabBarLabel: () => null,
      tabBarIcon: ({ focused, color, size }) => {
        // home => Icône pleine, home-outline => Icône vide
        let iconName = 'home';

        if (route.name === 'Exercice 1') {
          iconName = 'planet';
        }

        if (route.name === 'Exercice 2') {
          iconName = 'american-football';
        }

        // Si l'icône actuelle est sélectionnée, on ne mets pas le outline
        iconName += focused ? '' : '-outline';

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Exercice 1" component={Exercice1} options={{
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'people' : 'people-outline';
          return <Ionicons name={iconName} size={size} color={color} />
        }
      }} />
      <Tab.Screen name="Exercice 2" component={Exercice2} />
      <Tab.Screen name="Liste" component={List} />
      <Tab.Screen name="Pokémons" component={Pokemons} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
