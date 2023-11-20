<template>
  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #body>
      <InputsGridComponent @save="saveClient" @close="closeModal">
        <fwb-input label="NAME" v-model="clientToUpdate.name" />
        <fwb-input label="TOKEN" v-model="clientToUpdate.token" />
        <fwb-input label="URL AUTH" v-model="clientToUpdate.endpointAuth" />
        <fwb-input label="URL BET" v-model="clientToUpdate.endpointBet" />
        <fwb-input label="URL WIN" v-model="clientToUpdate.endpointWin" />
        <fwb-input label="URL ROLLBACK" v-model="clientToUpdate.endpointRollback" />
      </InputsGridComponent>
    </template>
  </fwb-modal>
</template>

<script setup lang="ts">
import { FwbModal, FwbInput } from 'flowbite-vue';
import InputsGridComponent from '@/components/InputsGridComponent.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { CLientUpdate } from "@/interfaces/clients";
import { useClientsStore } from '@/store';

const clientStore = useClientsStore();

const clientToUpdate: Ref<CLientUpdate> = ref({
  name: '',
  token: '',
  endpointAuth: '',
  endpointBet: '',
  endpointWin: '',
  endpointRollback: '',
});

const isShowModal = ref(false);

const saveClient = async () => {
  await clientStore.updateClient(clientToUpdate.value)
}
const closeModal = () => isShowModal.value = false;

defineExpose({
  isShowModal,
  clientToUpdate
})

</script>
