<template>
    <div>
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Endereços do Contato <b class="text-red-600">{{ contact.name }}</b></h5>
    </div>
    <div v-for="address in contact.addresses" class="mb-3 w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Estado: </strong>{{ address.state }}</p>
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Cidade: </strong> {{ address.city }}</p>
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Bairro: </strong>{{ address.neighborhood}}</p>
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Rua: </strong>{{ address.address }}</p>
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Número: </strong>{{ address.number }}</p>
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Complemento: </strong>{{ address.complement }}</p>
        <p class="mb-5 text-justify text-gray-500 sm:text-lg dark:text-gray-400"><strong>Cep: </strong>{{ address.zip_code }}</p>
    </div>
    <div class="mt-4 text-right">
        <router-link :to="{ name: 'contacts.index' }" class="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded disabled:opacity-75 disabled:cursor-not-allowed">
            <ArrowLeftIcon class="text-sm h-5"/> Voltar
        </router-link>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useContacts from "../../../composables/contacts";
import { ArrowLeftIcon } from "@heroicons/vue/20/solid";

export default {
    components: {
        ArrowLeftIcon
    },
    setup() {
        const { contact, getContact } = useContacts()
        const route = useRoute()

        onMounted(() => {
            getContact(route.params.id)
        });

        return {
            contact,
            getContact,
        }
    }

}
</script>
