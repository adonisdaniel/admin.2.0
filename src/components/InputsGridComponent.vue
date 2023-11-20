<template>
  <div class="grid grid-cols-1 md:grid-cols-2  gap-2 mb-2">
    <slot />
  </div>
  <fwb-button class="me-2" @click="$emit('save')">GUARDAR</fwb-button>
  <fwb-button color="red" @click="$emit('close')">CANCELAR</fwb-button>
</template>

<script setup lang="ts">
import { FwbButton } from 'flowbite-vue';

defineEmits(['save', 'close'])
</script>