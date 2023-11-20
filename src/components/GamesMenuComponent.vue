<template>
  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>JUEGOS</template>
    <template #body>
      <fwb-button v-for="(game, i) in games" :key="i" class="me-2">
        {{ game }}
      </fwb-button>
    </template>
  </fwb-modal>
</template>

<script setup lang="ts">
import { FwbModal, FwbButton } from 'flowbite-vue';
import { games } from '@/store/helpers/games';
import { ref } from 'vue';

const isShowModal = ref(false);

const closeModal = () => isShowModal.value = false

defineExpose({
  isShowModal
})
</script>

<style scoped></style>