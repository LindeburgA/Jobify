import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { STUDY_FIELDS } from '../data/studyFields';

export default function RegisterScreen({ navigation }) {
  // useState giver os en "state-variabel" (her: name) og en funktion til at
  // opdatere den (setName). Når state opdateres, gentegner React automatisk
  // skærmen, så det brugeren ser altid matcher den nyeste state.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // selectedField starter som null (ingen studieretning valgt endnu).
  const [selectedField, setSelectedField] = useState(null);

  // Kaldes når brugeren trykker på "Opret bruger"-knappen.
  function handleRegister() {
    // Simpel validering: stopper funktionen tidligt (return), hvis et felt mangler.
    if (!name || !email || !selectedField) {
      Alert.alert('Udfyld felterne', 'Navn, email og studieretning skal udfyldes.');
      return;
    }

    // Simulerer oprettelse af studerende-profil og sender direkte videre
    // til jobopslag der matcher den valgte studieretning.
    navigation.navigate('Jobs', { studyField: selectedField });
  }

  return (
    // ScrollView bruges i stedet for View, så indholdet kan scrolles,
    // hvis det fylder mere end skærmens højde (fx når tastaturet er åbent).
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent}>
      <Text style={styles.title}>Opret din profil</Text>
      <Text style={styles.subtitle}>
        Så virksomheder kan sende jobopslag direkte til din studieretning.
      </Text>

      <Text style={styles.label}>Navn</Text>
      <TextInput
        style={styles.input}
        placeholder="Dit fulde navn"
        // value + onChangeText gør feltet "controlled": React Native viser
        // altid det, der står i state (value), og opdaterer state
        // (via onChangeText) for hvert tegn, brugeren skriver.
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
        {/*
          .map() looper over listen af studieretninger (fra src/data/studyFields.js)
          og laver en trykbar "chip" (knap) for hver af dem.
          "key" skal være unik pr. element - React bruger den til at holde
          styr på hvilket element der er hvilket, når listen ændrer sig.
        */}
        {STUDY_FIELDS.map((field) => (
          <TouchableOpacity
            key={field}
            // style kan tage en ARRAY af styles. Her lægger vi
            // fieldChipSelected oveni fieldChip, men kun hvis denne chip
            // er den valgte (selectedField === field).
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
