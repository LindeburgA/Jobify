import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { STUDY_FIELDS } from '../data/studyFields';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedField, setSelectedField] = useState(null);

  function handleRegister() {
    if (!name || !email || !selectedField) {
      Alert.alert('Udfyld felterne', 'Navn, email og studieretning skal udfyldes.');
      return;
    }

    // Simulerer oprettelse af studerende-profil og sender direkte videre
    // til jobopslag der matcher den valgte studieretning.
    navigation.navigate('Jobs', { studyField: selectedField });
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent}>
      <Text style={styles.title}>Opret din profil</Text>
      <Text style={styles.subtitle}>
        Så virksomheder kan sende jobopslag direkte til din studieretning.
      </Text>

      <Text style={styles.label}>Navn</Text>
      <TextInput
        style={styles.input}
        placeholder="Dit fulde navn"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="dig@eksempel.dk"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Studieretning</Text>
      <View style={styles.fieldChipRow}>
        {STUDY_FIELDS.map((field) => (
          <TouchableOpacity
            key={field}
            style={[
              styles.fieldChip,
              selectedField === field && styles.fieldChipSelected,
            ]}
            onPress={() => setSelectedField(field)}
          >
            <Text
              style={[
                styles.fieldChipText,
                selectedField === field && styles.fieldChipTextSelected,
              ]}
            >
              {field}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Opret bruger</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
