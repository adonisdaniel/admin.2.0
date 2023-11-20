<template>
  <div class="mb-4">
    <fwb-select v-model="selected" :options="countries" label="Select a client" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { FwbSelect } from 'flowbite-vue'
import { useClientsStore } from '@/store';

const selected = ref('')
const countries = ref([]);
const clientStore = useClientsStore();

const getCLients = async () => {
  await clientStore.fetchClients();
  countries.value = clientStore.getClients;
}

onMounted(() => {
  getCLients();
})

const emit = defineEmits(['clientSelection'])

watch(selected, (client) => {
  emit('clientSelection', client)
})
</script>