import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.logo}>Jobify</Text>
      <Text style={styles.tagline}>
        Jobopslag der matcher din studieretning - direkte fra virksomheder til dig.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Opret profil som studerende</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Jobs', { studyField: null })}
      >
        <Text style={styles.buttonTextSecondary}>Se alle jobopslag</Text>
      </TouchableOpacity>
    </View>
  );
}
