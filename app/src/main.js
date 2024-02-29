import { createApp } from 'vue';
import { version } from '../package.json';
import App from './App.vue'
import router from './router'
import './app.css';

const app = createApp(App);
app.use(router).mount('#app');
app.config.globalProperties.$version = version;
