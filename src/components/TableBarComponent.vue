<template>
  <div class="flex justify-between mb-4">
    <div class="flex items-center">
      <span class="me-2">Mostrar</span>
      <fwb-dropdown :text="currentSelected">
        <fwb-list-group>
          <fwb-list-group-item v-for="page in pages" :key="page" @click="handleSelection(page)">
            {{ page }}
          </fwb-list-group-item>
        </fwb-list-group>
      </fwb-dropdown>
    </div>

    <div class="flex items-center">
      <span class="me-2">Buscar:</span>
      <fwb-input v-model="name" placeholder="enter your search query" class="outline-none" @input="handleSearch">
        <template #prefix>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" />
          </svg>
        </template>
      </fwb-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FwbDropdown, FwbListGroup, FwbListGroupItem, FwbInput } from 'flowbite-vue';
import { ref } from 'vue';

const pages = ['10', '25', '50', '100']
const currentSelected = ref('10');
const name = ref('')

const emit = defineEmits<{
  (e: 'selectEntries', cant: string): void
  (e: 'searchEntries', query: string): void
}>()

const handleSelection = (page: string) => {
  currentSelected.value = page;
  emit('selectEntries', currentSelected.value)
}

const handleSearch = () => {
  emit('searchEntries', name.value)
}
</script>
