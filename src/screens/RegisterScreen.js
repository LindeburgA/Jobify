import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useJobify } from '../state/JobifyContext';
import { INTERESTS_BY_FIELD, STUDY_FIELDS } from '../data/studyFields';
import { styles } from '../styles/styles';

export default function RegisterScreen({ navigation }) {
  const { profile, saveProfile, storageError } = useJobify();
  const [name, setName] = useState(profile?.name ?? '');
  const [email, setEmail] = useState(profile?.email ?? '');
  const [selectedField, setSelectedField] = useState(profile?.studyField ?? null);
  const [interests, setInterests] = useState(profile?.interests ?? []);

  function selectField(field) {
    setSelectedField(field);
    setInterests([]); // Interesserne skal passe til den valgte studieretning.
  }

  function toggleInterest(interest) {
    setInterests((current) => current.includes(interest)
      ? current.filter((item) => item !== interest)
      : [...current, interest]);
  }

  function handleSave() {
    if (!name.trim() || !email.trim() || !selectedField) {
      Alert.alert('Udfyld felterne', 'Navn, e-mail og studieretning skal udfyldes.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Ugyldig e-mail', 'Skriv en gyldig e-mailadresse.');
      return;
    }

    // Profilen ligger kun på denne enhed. Der oprettes ingen konto på en server.
    saveProfile({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      studyField: selectedField,
      interests,
    });
    navigation.navigate('Jobs');
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>{profile ? 'Rediger profil' : 'Opret profil'}</Text>
      <Text style={styles.subtitle}>Vælg din uddannelse og eventuelt de fagområder, der interesserer dig.</Text>

      {storageError && <Text style={styles.errorText}>Data kunne ikke gemmes på enheden. Prøv igen.</Text>}

      <Text style={styles.label}>Navn</Text>
      <TextInput style={styles.input} placeholder="Dit navn" value={name} onChangeText={setName} />

      <Text style={styles.label}>E-mail</Text>
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
            style={[styles.fieldChip, selectedField === field && styles.fieldChipSelected]}
            onPress={() => selectField(field)}
            accessibilityRole="button"
          >
            <Text style={[styles.fieldChipText, selectedField === field && styles.fieldChipTextSelected]}>{field}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedField && (
        <>
          <Text style={styles.label}>Interesser (valgfrit)</Text>
          <View style={styles.fieldChipRow}>
            {INTERESTS_BY_FIELD[selectedField].map((interest) => (
              <TouchableOpacity
                key={interest}
                style={[styles.fieldChip, interests.includes(interest) && styles.fieldChipSelected]}
                onPress={() => toggleInterest(interest)}
                accessibilityRole="button"
              >
                <Text style={[styles.fieldChipText, interests.includes(interest) && styles.fieldChipTextSelected]}>{interest}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Gem profil og se job</Text>
      </TouchableOpacity>
      <Text style={styles.helperText}>Profilen og dine gemte job bliver kun gemt lokalt på denne enhed.</Text>
    </ScrollView>
  );
}
