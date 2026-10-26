import { useEffect, useMemo, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import JobCard from '../components/JobCard';
import { JOBS } from '../data/jobs';
import { filterJobs } from '../data/filterJobs';
import { useJobify } from '../state/JobifyContext';
import { styles } from '../styles/styles';

export default function JobsScreen({ navigation }) {
  const { profile } = useJobify();
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  // En opdateret profil skal igen vise job, der matcher profilen.
  useEffect(() => setShowAll(false), [profile]);

  // Listen beregnes igen, når profil, søgning eller filterknap ændres.
  const jobs = useMemo(() => filterJobs(JOBS, profile, query, showAll), [profile, query, showAll]);

  // Jobdetaljer ligger i den overordnede stack; kun jobbets id sendes med.
  function openJob(job) {
    navigation.getParent()?.navigate('JobDetail', { jobId: job.id });
  }

  return (
    <View style={styles.screen}>
      {/* FlatList viser kun de kort, der er relevante på skærmen. */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.screenContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <Text style={styles.subtitle}>
              {profile?.studyField && !showAll
                ? `Job til ${profile.studyField}${profile.interests?.length ? ` · ${profile.interests.join(', ')}` : ''}`
                : 'Alle eksempelopslag'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Søg efter job, virksomhed eller by"
              value={query}
              onChangeText={setQuery}
              accessibilityLabel="Søg i jobopslag"
            />
            {profile?.studyField && (
              <TouchableOpacity style={styles.filterButton} onPress={() => setShowAll((value) => !value)}>
                <Text style={styles.filterButtonText}>{showAll ? 'Vis job til mig' : 'Vis alle job'}</Text>
              </TouchableOpacity>
            )}
          </View>
        }
        ListEmptyComponent={<Text style={styles.emptyText}>Ingen job matcher dine valg. Prøv en anden søgning eller vælg “Vis alle job”.</Text>}
        renderItem={({ item }) => <JobCard job={item} onOpen={() => openJob(item)} />}
      />
    </View>
  );
}
