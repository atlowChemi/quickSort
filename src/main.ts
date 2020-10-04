import { createApp } from 'vue';
import App from './App.vue';
import { Icons } from './components';

const app = createApp(App);

app.component("Icons", Icons)

app.mount('#app')
