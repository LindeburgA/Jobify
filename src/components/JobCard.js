import { Text, TouchableOpacity, View } from 'react-native';
import { useJobify } from '../state/JobifyContext';
import { styles } from '../styles/styles';

// Det samme jobkort bruges i både joblisten og listen over gemte job.
export default function JobCard({ job, onOpen }) {
  const { savedIds, toggleSaved } = useJobify();
  const isSaved = savedIds.includes(job.id);

  return (
    <View style={styles.jobCard}>
      <TouchableOpacity onPress={onOpen} accessibilityRole="button" accessibilityLabel={`Se ${job.title}`}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.jobCompany}>{job.company}</Text>
        <View style={styles.jobMetaRow}>
          <View style={styles.tag}><Text style={styles.tagText}>{job.studyField}</Text></View>
          <Text style={styles.jobLocation}>{job.location}</Text>
        </View>
        <Text style={styles.jobTags}>{job.tags.join(' · ')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveSmallButton}
        onPress={() => toggleSaved(job.id)}
        accessibilityRole="button"
        accessibilityLabel={isSaved ? `Fjern ${job.title} fra gemte job` : `Gem ${job.title}`}
      >
        <Text style={styles.saveSmallButtonText}>{isSaved ? 'Fjern fra gemte' : 'Gem job'}</Text>
      </TouchableOpacity>
    </View>
  );
}
