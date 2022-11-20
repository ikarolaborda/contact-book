import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

export default function useContacts() {
    const contacts = ref({});
    const contact = ref({})
    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject('$swal');

    const getContacts = async (page = 1,
                            search_id = '',
                            search_name = '',
                            search_email = '',
                            search_phone = '',
                            search_global = '',
                            order_column = 'created_at',
                            order_direction = 'desc') => {
        axios.get('/api/contacts?page=' + page +
            '&search_id=' + search_id +
            '&search_name=' + search_name +
            '&search_email=' + search_email +
            '&search_phone=' + search_phone +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction).then(
            response => {
                contacts.value = response.data;
            }
        )
    };

    const getContact = async (id) => {
        axios.get('/api/contacts/' + id)
            .then(response => {
                contact.value = response.data.data;
            })
    }

    const storeContact = async (contact) => {
        if(isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};
        axios.post('/api/contacts', contact).then(
            response => {
                router.push({name: 'contacts.index'});
                swal({
                    icon: 'success',
                    title: 'Contact Criado com Sucesso!',
                });
            }
        ).catch(error => {
            if(error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        }).finally(() => {
            isLoading.value = false;
        });
    }

    const updateContact = async (contact) => {
        if(isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};
        axios.put('/api/contacts/' + contact.id, contact).then(
            response => {
                router.push({name: 'contacts.index'});
                swal({
                    icon: 'success',
                    title: 'Contato Atualizado com Sucesso!',
                });
            }
        ).catch(error => {
            if(error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        }).finally(() => {
            isLoading.value = false;
        });
    }

    const deleteContact = async (id) => {
        if (isLoading.value) return;
    }

    return {
        contacts,
        contact,
        getContacts,
        getContact,
    }
}
