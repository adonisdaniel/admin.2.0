<template>
  <div class="flex items-end justify-center text-center mt-4 flex-col">
    <fwb-pagination
      v-model="currentPage"
      :total-pages="currentPage + 1"
      :layout="'navigation'"
      @page-changed="handleChange"
    ></fwb-pagination>
    <p class="mt-2">Current page: {{ currentPage }}</p>
  </div>
</template>

<script setup lang="ts">
import { FwbPagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)

const emit = defineEmits(['handle-page'])

defineExpose({
  currentPage
})

const handleChange = (value: number) => emit('handle-page', value)
</script>
