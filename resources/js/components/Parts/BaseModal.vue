<template>
    <div v-show="isOpen" class="absolute w-full bg-gray-50 bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Endereços do contato
            </h3>
        </div>
        <div v-if="isOpen" class="p-6 bg-white self-start mt-32 max-w-screen-md">
            <button @click="$emit('close')" class="flex justify-items-center text-white mt-8 bg-gray-500 py-2 px-6">
                Fechar
            </button>
        </div>

    </div>
</template>

<script setup>
defineEmits(['close']);
defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    contact: {
        type: Object,
        required: true
    }

});
</script>
