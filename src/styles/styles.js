import { StyleSheet } from 'react-native';
import { colors } from './colors';

// Al styling til appen er samlet i denne fil i stedet for at ligge spredt
// ude i hver skærm-komponent. StyleSheet.create() ligner almindelige CSS-lignende
// objekter, men er React Natives egen måde at style views, tekst m.m. på
// (der findes intet CSS i React Native - kun JavaScript-objekter som dette).
export const styles = StyleSheet.create({
  // --- Generelle skærm-containere ---
  screen: {
    flex: 1, // flex: 1 betyder "fyld al tilgængelig plads"
    backgroundColor: colors.background,
  },
  screenContent: {
    flexGrow: 1,
    padding: 24,
  },
  // Bruges på skærme, hvor indholdet skal centreres lodret og vandret (fx WelcomeScreen)
  centerScreen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  // --- Tekst-stile ---
  logo: {
    fontSize: 40,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginBottom: 24,
  },

  // --- Knapper ---
  // Primær knap: fyldt med hovedfarven (fx "Opret bruger", "Ansøg nu")
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  // Sekundær knap: hvid med kant - bruges til den "mindre vigtige" handling
  buttonSecondary: {
    backgroundColor: colors.card,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },

  // --- Formular (RegisterScreen) ---
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.text,
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    marginTop: 4,
  },
  // "Chip"-knapperne man vælger studieretning med
  fieldChip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  // Lægges oveni fieldChip, når den valgte chip skal fremhæves
  fieldChipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  fieldChipText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '500',
  },
  fieldChipTextSelected: {
    color: '#FFFFFF',
  },
  fieldChipRow: {
    flexDirection: 'row', // placerer chips ved siden af hinanden
    flexWrap: 'wrap', // ...og lader dem "wrappe" til ny linje, når pladsen slipper op
    marginBottom: 20,
  },

  // --- Jobkort i listen (JobsScreen) ---
  jobCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 8,
  },
  jobMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // skubber studieretning-tag og lokation ud til hver sin side
    alignItems: 'center',
  },
  // De små runde mærkater med studieretning (fx "Datamatiker")
  tag: {
    backgroundColor: colors.tag,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '600',
  },
  jobLocation: {
    fontSize: 12,
    color: colors.textMuted,
  },
  // Vises når FlatList's data-liste er tom (ingen matchende jobopslag)
  emptyText: {
    textAlign: 'center',
    color: colors.textMuted,
    marginTop: 40,
  },

  // --- Jobdetaljer (JobDetailScreen) ---
  detailSection: {
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 16,
    lineHeight: 22,
  },
});
