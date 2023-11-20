<template>
  <fwb-modal v-if="isShowModal && client" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        URLs de: {{ client.name }}
      </div>
    </template>
    <template #body>
      <fwb-accordion always-open>
        <fwb-accordion-panel v-if="client.endpointAuth">
          <fwb-accordion-header>
            AUTH
          </fwb-accordion-header>
          <fwb-accordion-content>
            {{ client.endpointAuth }}
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel v-if="client.endpointBet">
          <fwb-accordion-header>
            BET
          </fwb-accordion-header>
          <fwb-accordion-content>
            {{ client.endpointBet }}
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel v-if="client.endpointWin">
          <fwb-accordion-header>
            WIN
          </fwb-accordion-header>
          <fwb-accordion-content>
            {{ client.endpointWin }}
          </fwb-accordion-content>
        </fwb-accordion-panel>
        <fwb-accordion-panel v-if="client.endpointRollback">
          <fwb-accordion-header>
            ROLLBACK
          </fwb-accordion-header>
          <fwb-accordion-content>
            {{ client.endpointRollback }}
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>
    </template>
  </fwb-modal>
</template>

<script setup lang="ts">
import type { typeBodyItems } from '@/interfaces/headerItems';
import { FwbModal, FwbAccordion, FwbAccordionPanel, FwbAccordionHeader, FwbAccordionContent } from 'flowbite-vue'
import { ref } from 'vue';

defineProps<
  { client: typeBodyItems | undefined }
>()

const isShowModal = ref(false);

const closeModal = () => isShowModal.value = false

defineExpose({
  isShowModal
})
</script>

<style scoped></style>