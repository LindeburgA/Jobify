import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  screenContent: { flexGrow: 1, padding: 24 },
  loadingScreen: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background },
  centerScreen: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { fontSize: 40, fontWeight: '800', color: colors.primary, marginBottom: 8 },
  tagline: { fontSize: 16, color: colors.textMuted, textAlign: 'center', marginBottom: 40 },
  title: { fontSize: 24, fontWeight: '700', color: colors.text, marginBottom: 4 },
  subtitle: { fontSize: 15, color: colors.textMuted, marginBottom: 24 },
  helperText: { fontSize: 12, color: colors.textMuted, marginTop: 16, lineHeight: 18 },
  errorText: { color: colors.error, fontSize: 14, marginBottom: 12 },

  button: { backgroundColor: colors.primary, borderRadius: 10, paddingVertical: 14, alignItems: 'center', width: '100%', marginTop: 12 },
  buttonSecondary: { backgroundColor: colors.card, borderRadius: 10, paddingVertical: 14, alignItems: 'center', width: '100%', marginTop: 12, borderWidth: 1, borderColor: colors.primary },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  buttonTextSecondary: { color: colors.primary, fontSize: 16, fontWeight: '600' },
  filterButton: { borderWidth: 1, borderColor: colors.primary, borderRadius: 10, paddingVertical: 10, alignItems: 'center', marginBottom: 20, backgroundColor: colors.card },
  filterButtonText: { color: colors.primary, fontSize: 14, fontWeight: '600' },

  input: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: colors.text, marginBottom: 14 },
  label: { fontSize: 14, fontWeight: '600', color: colors.text, marginBottom: 8, marginTop: 4 },
  fieldChipRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  fieldChip: { borderWidth: 1, borderColor: colors.border, backgroundColor: colors.card, borderRadius: 20, paddingVertical: 8, paddingHorizontal: 14, marginRight: 8, marginBottom: 8 },
  fieldChipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  fieldChipText: { color: colors.text, fontSize: 13, fontWeight: '500' },
  fieldChipTextSelected: { color: '#FFFFFF' },

  jobCard: { backgroundColor: colors.card, borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  jobTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginBottom: 4 },
  jobCompany: { fontSize: 14, color: colors.textMuted, marginBottom: 8 },
  jobMetaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  tag: { backgroundColor: colors.tag, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  tagText: { color: colors.primaryDark, fontSize: 12, fontWeight: '600' },
  jobLocation: { fontSize: 12, color: colors.textMuted },
  jobTags: { color: colors.textMuted, fontSize: 12, marginTop: 10 },
  saveSmallButton: { marginTop: 14, alignSelf: 'flex-start', borderWidth: 1, borderColor: colors.primary, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12 },
  saveSmallButtonText: { color: colors.primary, fontSize: 13, fontWeight: '600' },
  emptyText: { textAlign: 'center', color: colors.textMuted, marginTop: 40, lineHeight: 21 },

  detailSection: { marginTop: 20 },
  detailLabel: { fontSize: 13, fontWeight: '600', color: colors.textMuted, marginBottom: 4, textTransform: 'uppercase' },
  detailValue: { fontSize: 15, color: colors.text, marginBottom: 16, lineHeight: 22 },
});
