// Samlet filterlogik, så søgning og profilvalg anvendes ens på alle opslag.
export function filterJobs(jobs, profile, query, showAll) {
  const search = query.trim().toLocaleLowerCase('da-DK');

  return jobs.filter((job) => {
    if (!showAll && profile?.studyField && job.studyField !== profile.studyField) return false;
    if (!showAll && profile?.interests?.length &&
        !profile.interests.some((interest) => job.tags.includes(interest))) return false;

    const searchable = [job.title, job.company, job.location, job.description, ...job.tags]
      .join(' ').toLocaleLowerCase('da-DK');
    return !search || searchable.includes(search);
  });
}
