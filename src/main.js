import '@picocss/pico';
import './assets/style.css';

import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import { getAuth, connectAuthEmulator, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

let vueApp = null;
export const user = ref(null);

fetch('/__/firebase/init.json').then(async (response) => {
  const firebaseApp = initializeApp(await response.json());
  const auth = getAuth(firebaseApp);
  if (import.meta.env.DEV) {
    connectAuthEmulator(auth, 'http://localhost:9099');
  }
  onAuthStateChanged(auth, (u) => {
    user.value = u;

    if (!vueApp) {
      vueApp = createApp(App);
      vueApp.use(router);
      vueApp.mount('body');
    }
  });
});
