import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

// Alle skærme, der er registreret i App.js (Stack.Screen), modtager automatisk
// et "navigation"-objekt som prop. Det bruges til at skifte skærm, fx med
// navigation.navigate('Navn-på-skærm').
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.logo}>Jobify</Text>
      <Text style={styles.tagline}>
        Jobopslag der matcher din studieretning - direkte fra virksomheder til dig.
      </Text>

      {/*
        TouchableOpacity er en trykbar knap i React Native.
        onPress kaldes, når brugeren trykker på den.
        Denne knap navigerer videre til "Register"-skærmen (se App.js).
      */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Opret profil som studerende</Text>
      </TouchableOpacity>

      {/*
        Denne knap navigerer til "Jobs"-skærmen. Vi sender studyField: null
        med som parameter, så Jobs-skærmen ved at den skal vise ALLE jobopslag
        (i modsætning til når man kommer fra Register, hvor kun jobopslag
        for den valgte studieretning vises).
      */}
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Jobs', { studyField: null })}
      >
        <Text style={styles.buttonTextSecondary}>Se alle jobopslag</Text>
      </TouchableOpacity>
    </View>
  );
}
