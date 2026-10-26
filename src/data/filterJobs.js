// Samlet filterlogik, så søgning og profilvalg anvendes ens på alle opslag.
export function filterJobs(jobs, profile, query, showAll) {
  // Små bogstaver gør søgningen uafhængig af store og små bogstaver.
  const search = query.trim().toLocaleLowerCase('da-DK');

  return jobs.filter((job) => {
    // 'Vis alle job' slår profilfiltrene fra, men søgningen virker stadig.
    if (!showAll && profile?.studyField && job.studyField !== profile.studyField) return false;
    // Hvis der er valgt interesser, er ét match med jobbets tags nok.
    if (!showAll && profile?.interests?.length &&
        !profile.interests.some((interest) => job.tags.includes(interest))) return false;

    const searchable = [job.title, job.company, job.location, job.description, ...job.tags]
      .join(' ').toLocaleLowerCase('da-DK');
    return !search || searchable.includes(search);
  });
}
