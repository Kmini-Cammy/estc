import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import 'primeicons/primeicons.css';

import { createMemoryHistory, createRouter } from 'vue-router';

import Acceuil from './components/Acceuil.vue';
import Equipes from './components/Equipes.vue';
import Joueurs from './components/Joueurs.vue';
import InfosPratiques from './components/InfosPratiques.vue';

const routes = [
  { path: '/', component: Acceuil },
  { path: '/equipes', component: Equipes },
  { path: '/joueurs', component: Joueurs },
  { path: '/infos', component: InfosPratiques },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false,
        }
    }
});

app.use(router);

app.mount('#app');