import { FlatList, Text, View } from 'react-native';
import JobCard from '../components/JobCard';
import { JOBS } from '../data/jobs';
import { useJobify } from '../state/JobifyContext';
import { styles } from '../styles/styles';

export default function SavedJobsScreen({ navigation }) {
  const { savedIds, storageError } = useJobify();
  const jobs = JOBS.filter((job) => savedIds.includes(job.id));

  return (
    <View style={styles.screen}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.screenContent}
        ListHeaderComponent={
          <View>
            <Text style={styles.subtitle}>Job, du vil vende tilbage til.</Text>
            {storageError && <Text style={styles.errorText}>Dine ændringer kunne ikke gemmes på enheden.</Text>}
          </View>
        }
        ListEmptyComponent={<Text style={styles.emptyText}>Du har ikke gemt nogen job endnu. Find et opslag under Jobopslag, og tryk “Gem job”.</Text>}
        renderItem={({ item }) => (
          <JobCard
            job={item}
            onOpen={() => navigation.getParent()?.navigate('JobDetail', { jobId: item.id })}
          />
        )}
      />
    </View>
  );
}
