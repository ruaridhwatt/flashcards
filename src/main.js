import '@picocss/pico';
import './assets/style.css';

import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

let vueApp = null;
const auth = getAuth();
export const user = ref(null);

onAuthStateChanged(auth, (u) => {
  user.value = u;

  if (!vueApp) {
    vueApp = createApp(App);
    vueApp.use(router);
    vueApp.mount('body');
  }
});
