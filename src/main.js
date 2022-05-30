const { createApp } = require('vue');
import App from './App.vue';
import RequestManager from './plugins/request-manager.js';

const app = createApp(App);

app.use(RequestManager);

app.mount('#app');
