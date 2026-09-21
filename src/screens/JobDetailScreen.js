import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default function JobDetailScreen({ route }) {
  // Vi pakker "job" ud af route.params med destructuring.
  // Det er det samme job-objekt, som JobsScreen sendte med i navigation.navigate.
  const { job } = route.params;

  // Kaldes når brugeren trykker "Ansøg nu"
  // pop-up-boks - ansøgningen bliver sendt.
  function handleApply() {
    Alert.alert('Ansøgning sendt', `Din ansøgning til ${job.company} er sendt.`);
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.subtitle}>{job.company}</Text>

      <View style={styles.jobMetaRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{job.studyField}</Text>
        </View>
        <Text style={styles.jobLocation}>{job.location}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailLabel}>Ansøgningsfrist</Text>
        <Text style={styles.detailValue}>{job.deadline}</Text>

        <Text style={styles.detailLabel}>Om jobbet</Text>
        <Text style={styles.detailValue}>{job.description}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleApply}>
        <Text style={styles.buttonText}>Ansøg nu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
