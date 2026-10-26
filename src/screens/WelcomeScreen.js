import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.logo}>Jobify</Text>
      <Text style={styles.tagline}>Find studiejob, der passer til din uddannelse og dine interesser.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainTabs', { screen: 'Profile' })}
      >
        <Text style={styles.buttonText}>Opret profil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('MainTabs', { screen: 'Jobs' })}
      >
        <Text style={styles.buttonTextSecondary}>Se jobopslag</Text>
      </TouchableOpacity>
    </View>
  );
}
