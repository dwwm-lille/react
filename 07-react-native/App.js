import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Exercice1 from './screens/Exercice1';
import Home from './screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
