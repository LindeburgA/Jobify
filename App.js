import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Hver skærm i appen er sin egen komponent-fil under src/screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import JobsScreen from './src/screens/JobsScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';
import { colors } from './src/styles/colors';

// Stack-navigatoren styrer hvilken skærm der vises, og lægger dem
// "oven på hinanden" som en stak - man navigerer frem/tilbage mellem dem.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer skal pakke hele navigationen ind - uden den
    // kan React Navigation ikke holde styr på hvilken skærm der er aktiv.
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator
        // Bestemmer hvilken skærm brugeren ser først, når appen starter.
        initialRouteName="Welcome"
        // screenOptions gælder som standard for ALLE skærme i navigatoren
        // (fx farven på topbjælken/headeren), medmindre en skærm overskriver det.
        screenOptions={{
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        {/*
          Hvert Stack.Screen "registrerer" en skærm med et navn (name).
          Det navn er det, man bruger når man skriver
          navigation.navigate('Navn') for at hoppe til skærmen.
        */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          // Skjuler topbjælken på velkomstskærmen, så den fylder hele skærmen.
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Opret profil' }}
        />
        <Stack.Screen
          name="Jobs"
          component={JobsScreen}
          options={{ title: 'Jobopslag' }}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          options={{ title: 'Jobopslag' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
