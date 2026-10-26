import { ActivityIndicator, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import JobsScreen from './src/screens/JobsScreen';
import SavedJobsScreen from './src/screens/SavedJobsScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';
import { JobifyProvider, useJobify } from './src/state/JobifyContext';
import { colors } from './src/styles/colors';
import { styles } from './src/styles/styles';

// Stacken bruges til velkomst og jobdetaljer; fanerne ligger samlet i MainTabs.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Fanerne i bunden gør det muligt at skifte mellem job, gemte job og profil.
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.card },
      }}
    >
      <Tab.Screen name="Jobs" component={JobsScreen} options={{ title: 'Jobopslag' }} />
      <Tab.Screen name="Saved" component={SavedJobsScreen} options={{ title: 'Gemte job' }} />
      <Tab.Screen name="Profile" component={RegisterScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
}

function Navigation() {
  const { ready, profile } = useJobify();

  // Vent på lokal lagring, før vi vælger startskærm. Ellers kan en gemt profil
  // kortvarigt se ud som en ny bruger ved opstart.
  if (!ready) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName={profile ? 'MainTabs' : 'Welcome'}
        screenOptions={{
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.text,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} options={{ title: 'Jobdetaljer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Provider gør profil og gemte job tilgængelige på alle skærme.
export default function App() {
  return (
    <JobifyProvider>
      <Navigation />
    </JobifyProvider>
  );
}
