<template>
  <div class="flex items-center h-5">
    <input :id="id" type="checkbox" value=""
      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
      :required="required">
  </div>
  <label :for="id" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    {{
      title
    }}</label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string,
  id: string,
  required?: boolean
}>()

const title = computed(() => props.title)
const id = computed(() => props.id)
const required = computed(() => props.required)
</script>

<style scoped></style>