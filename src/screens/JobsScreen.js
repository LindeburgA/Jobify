import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { JOBS } from '../data/jobs';

export default function JobsScreen({ route, navigation }) {
  const studyField = route.params?.studyField ?? null;

  const jobs = studyField
    ? JOBS.filter((job) => job.studyField === studyField)
    : JOBS;

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.screenContent}
        data={jobs}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.subtitle}>
            {studyField
              ? `Jobopslag til ${studyField}-studerende`
              : 'Alle jobopslag'}
          </Text>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Ingen jobopslag til denne studieretning lige nu.
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.jobCard}
            onPress={() => navigation.navigate('JobDetail', { job: item })}
          >
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <View style={styles.jobMetaRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.studyField}</Text>
              </View>
              <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
