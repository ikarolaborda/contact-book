<template>
    <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <table class="border border-solid w-full">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Contact Name</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Contact e-mail</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Contact Phones</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Contact Addresses</span>
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left">
                            <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contact in contacts.data">
                        <td class="border divide-opacity-50 divide-x-2 divide-y-2 px-6 py-4 whitespace-no-wrap leading-5 text-sm text-gray-900">{{ contact.name }}</td>
                        <td class="border divide-opacity-50 divide-x-2 divide-y-2 px-6 py-4 whitespace-no-wrap leading-5 text-sm text-gray-900">{{ contact.email }}</td>
                        <td  class="border divide-opacity-50 divide-x-2 divide-y-2 px-6 py-4 whitespace-no-wrap leading-5 text-sm text-gray-900">
                            <div v-for="phone in contact.phones" class="mt-1 shadow-sm border bg-gray-100">
                                {{ phone.phone }}
                            </div>
                        </td>
                        <td class="border divide-opacity-50 divide-x-2 divide-y-2 px-6 py-4 whitespace-no-wrap leading-5 text-sm text-gray-900">
                            <div class="mt-1">
                                <router-link :to="{ name: 'contacts.addresses', params: { id: contact.id } }" class="inline-flex items-center text-green-600 hover:text-violet-500">
                                    <ArchiveBoxIcon class="text-sm text-center h-5 ml-2 mr-3" />
                                    Ver endereços
                                </router-link>
                            </div>
                        </td>
                        <td class="border divide-opacity-50 divide-x-2 divide-y-2 px-6 py-4 whitespace-no-wrap leading-5 text-sm text-gray-900">
                            <div class="inline-flex">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900"><PencilIcon class="text-sm h-5" /></a>
                                <a href="#" class="ml-2 text-red-600 hover:text-red-900"><TrashIcon class="ml-5 text-sm h-5" /></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {ref, onMounted, watch} from "vue";
import { TailwindPagination } from 'laravel-vue-pagination';
import { PencilIcon, TrashIcon, ArchiveBoxIcon } from "@heroicons/vue/24/outline";
import useContacts from "../../composables/contacts";
import BaseModal from "../Parts/BaseModal";
export default {
    components: {
        TailwindPagination,
        PencilIcon,
        TrashIcon,
        ArchiveBoxIcon,
        BaseModal
    },
    setup() {
        const isOpen = ref(false);
        const toggleModal = () => {
            isOpen.value = !isOpen.value;
        };

        const search_global = ref('');
        const orderColumn = ref('created_at');
        const orderDirection = ref('desc');
        const { contacts, getContacts } = useContacts();
        onMounted(() => {
            getContacts();
        });

        return {
            contacts,
            getContacts,
            isOpen,
            toggleModal
        }

    },
    computed: {
        currentPageTitle() {
            return this.$route.meta.title;
        }
    }
}
</script>

<style scoped>

</style>
