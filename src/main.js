import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { CoMoon, CoSun } from 'oh-vue-icons/icons';

addIcons(CoMoon, CoSun);

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app');
