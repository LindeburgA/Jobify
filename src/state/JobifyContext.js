import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JOBS } from '../data/jobs';

const STORAGE_KEY = '@jobify/user-data-v2';
const JobifyContext = createContext(null);
const validJobIds = new Set(JOBS.map((job) => job.id));

export function JobifyProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [savedIds, setSavedIds] = useState([]);
  const [ready, setReady] = useState(false);
  const [canPersist, setCanPersist] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const writeQueue = useRef(Promise.resolve());

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored && active) {
          const data = JSON.parse(stored);
          if (data.profile && typeof data.profile === 'object') {
            setProfile(data.profile);
          }
          if (Array.isArray(data.savedIds)) {
            setSavedIds(data.savedIds.filter((id) => validJobIds.has(id)));
          }
        }
        if (active) setCanPersist(true);
      } catch {
        if (active) setStorageError(true);
      } finally {
        if (active) setReady(true);
      }
    }

    load();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    // En læsefejl må ikke overskrive tidligere data med tomme standardværdier.
    if (!ready || !canPersist) return;

    const snapshot = JSON.stringify({ profile, savedIds });
    // Køen bevarer rækkefølgen, hvis brugeren trykker Gem/Fjern hurtigt.
    writeQueue.current = writeQueue.current
      .then(() => AsyncStorage.setItem(STORAGE_KEY, snapshot))
      .then(() => setStorageError(false))
      .catch(() => setStorageError(true));
  }, [profile, savedIds, ready, canPersist]);

  function toggleSaved(id) {
    if (!validJobIds.has(id)) return;
    setSavedIds((current) => current.includes(id)
      ? current.filter((savedId) => savedId !== id)
      : [...current, id]);
  }

  const value = useMemo(() => ({
    profile,
    savedIds,
    ready,
    storageError,
    saveProfile: setProfile,
    toggleSaved,
  }), [profile, savedIds, ready, storageError]);

  return <JobifyContext.Provider value={value}>{children}</JobifyContext.Provider>;
}

export function useJobify() {
  const value = useContext(JobifyContext);
  if (!value) throw new Error('useJobify skal bruges inde i JobifyProvider');
  return value;
}
