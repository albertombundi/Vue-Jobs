import './assets/main.css';
import 'primeicons/primeicons.css';
import routes from './router';

import { createApp } from 'vue'
import App from './components/App.vue'

const app = createApp(App)

app.use(routes);

app.mount('#app');
