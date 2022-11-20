require('./bootstrap');

import { createApp } from 'vue';
import ContactsIndex from './components/Contacts/Index';
import VueSweetalert2 from "vue-sweetalert2";
import router from './routes/index';

const app = createApp({});
app.use(router);
app.use(VueSweetalert2);
app.component('contacts-index', ContactsIndex);
app.mount('#app');
