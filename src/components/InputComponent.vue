<template>
  <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    {{
      $t(title)
    }}
  </label>
  <input :type="type" :id="id"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
    :placeholder="placeholder" :required="required" v-model="modelValue">
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  placeholder?: string,
  title: string,
  id: string,
  type: string,
  required?: boolean,
  modelValue: string
}>()

const title = computed(() => props.title)
const placeholder = computed(() => props.placeholder)
const id = computed(() => props.id)
const type = computed(() => props.type)
const required = computed(() => props.required)

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>

<style scoped></style>