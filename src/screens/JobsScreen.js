import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { JOBS } from '../data/jobs';

// "route" indeholder de parametre, en anden skærm har sendt med, da den
// navigerede hertil (fx navigation.navigate('Jobs', { studyField: 'X' })).
export default function JobsScreen({ route, navigation }) {
  // route.params kan være undefined, hvis skærmen åbnes uden parametre,
  // derfor bruger vi ?. (optional chaining) og ?? null (fallback-værdi).
  const studyField = route.params?.studyField ?? null;

  // Hvis der er valgt en studieretning, filtrerer vi JOBS-listen, så kun
  // relevante jobopslag vises. Ellers vises alle jobopslag.
  const jobs = studyField
    ? JOBS.filter((job) => job.studyField === studyField)
    : JOBS;

  return (
    <View style={styles.screen}>
      {/*
        FlatList er React Natives komponent til at vise lange lister effektivt
        - den render kun de elementer, der reelt er synlige på skærmen.
      */}
      <FlatList
        contentContainerStyle={styles.screenContent}
        // data er selve listen af elementer, der skal vises.
        data={jobs}
        // keyExtractor fortæller FlatList, hvordan den finder en unik nøgle
        // for hvert element (bruges internt til at holde styr på listen).
        keyExtractor={(item) => item.id}
        // Vises øverst i listen, én gang - fx som en overskrift.
        ListHeaderComponent={
          <Text style={styles.subtitle}>
            {studyField
              ? `Jobopslag til ${studyField}-studerende`
              : 'Alle jobopslag'}
          </Text>
        }
        // Vises i stedet for listen, hvis "data" er en tom liste.
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Ingen jobopslag til denne studieretning lige nu.
          </Text>
        }
        // renderItem bestemmer, hvordan HVERT enkelt job i listen skal se ud.
        // Den kaldes automatisk af FlatList for hvert element i "data".
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.jobCard}
            // Ved tryk navigerer vi til detalje-skærmen og sender hele
            // job-objektet med, så JobDetailScreen kan vise det.
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
