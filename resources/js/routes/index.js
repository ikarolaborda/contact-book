import { createRouter, createWebHistory } from "vue-router";

import ContactsIndex from '../components/Contacts/Index'
import ContactsAddresses from '../components/Contacts/Addresses/AddressesDetails'

const routes = [
    {
        path: '/',
        redirect: { name: 'contacts.index' },
    },
    {
        path: '/contacts',
        name: 'contacts.index',
        component: ContactsIndex,
        meta: { title: 'Lista de Contatos' }
    },
    {
        path: '/contacts/:id/addresses',
        name: 'contacts.addresses',
        component: ContactsAddresses,
        meta: { title: 'Endereços do Contato' }

    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
