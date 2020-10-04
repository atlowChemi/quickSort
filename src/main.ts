import { createApp } from 'vue';
import App from './App.vue';
import { Icons, MyHr } from './components';

const app = createApp(App);

app.component("Icons", Icons);
app.component("MyHr", MyHr);

app.mount('#app')
