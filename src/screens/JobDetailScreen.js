import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { JOBS } from '../data/jobs';
import { useJobify } from '../state/JobifyContext';
import { styles } from '../styles/styles';

export default function JobDetailScreen({ route }) {
  // Slå opslaget op via det id, som joblisten eller Gemte job sender med.
  const job = JOBS.find((item) => item.id === route.params?.jobId);
  const { savedIds, toggleSaved, storageError } = useJobify();

  if (!job) {
    return <View style={styles.centerScreen}><Text style={styles.emptyText}>Jobopslaget blev ikke fundet.</Text></View>;
  }

  // Knappens tekst følger den fælles liste over gemte job.
  const isSaved = savedIds.includes(job.id);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.subtitle}>{job.company}</Text>

      <View style={styles.jobMetaRow}>
        <View style={styles.tag}><Text style={styles.tagText}>{job.studyField}</Text></View>
        <Text style={styles.jobLocation}>{job.location}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Interesseområder</Text>
        <Text style={styles.detailValue}>{job.tags.join(', ')}</Text>
        <Text style={styles.detailLabel}>Arbejdstid</Text>
        <Text style={styles.detailValue}>{job.hours}</Text>
        <Text style={styles.detailLabel}>Løn</Text>
        <Text style={styles.detailValue}>Ikke oplyst</Text>
        <Text style={styles.detailLabel}>Ansøgningsfrist</Text>
        <Text style={styles.detailValue}>Ikke fastsat (demoopslag)</Text>
        <Text style={styles.detailLabel}>Om jobbet</Text>
        <Text style={styles.detailValue}>{job.description}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => toggleSaved(job.id)}>
        <Text style={styles.buttonText}>{isSaved ? 'Fjern fra gemte job' : 'Gem job'}</Text>
      </TouchableOpacity>
      {storageError && <Text style={styles.errorText}>Ændringen kunne ikke gemmes på enheden.</Text>}
      <Text style={styles.helperText}>Dette er et demoopslag. Du kan ikke søge jobbet gennem appen.</Text>
    </ScrollView>
  );
}
