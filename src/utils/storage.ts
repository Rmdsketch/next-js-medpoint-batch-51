import LocalStorage from '@/lib/storage';

let storage: LocalStorage;

if (typeof window !== 'undefined') {
  storage = new LocalStorage(window.localStorage);
}

export { storage };
