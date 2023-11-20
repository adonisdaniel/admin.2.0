<template>
  <MainLayout>
    <SelectClient @client-selection="client => handleClient(client)" />
    <TableItemsComponent :header-items="operatorStore.getTableHeader" :body-items="operatorStore.getTableBody"
      @handle-url="openUrl" @handle-games="openGames" />
  </MainLayout>
</template>

<script setup lang="ts">
import TableItemsComponent from '@/components/TableItemsComponent.vue';
import SelectClient from '@/views/pages/operators/components/SelectClient.vue'
import { useOperatorStore } from '@/store';
import MainLayout from '@/views/layouts/MainLayout.vue';

const operatorStore = useOperatorStore();

const handleClient = async (client: string) => {
  const options = { params: { client } };
  await operatorStore.fetchOperators(options)
}

const openGames = (operator: any) => console.log('open games', operator);
const openUrl = (operator: any) => console.log('openUrl', operator);

</script>

<style scoped></style>