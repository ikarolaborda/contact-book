require('./bootstrap');

import { createApp } from 'vue';
import ContactsIndex from './components/Contacts/Index';

const app = createApp({});
app.component('contacts-index', ContactsIndex);
app.mount('#app');
