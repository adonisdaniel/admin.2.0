<template>
  <MainLayout>
    <TableItemsComponent :header-items="operatorStore.getTableHeader" :body-items="operatorStore.getTableBody"
      @handle-url="openUrl" @handle-games="openGames" />
  </MainLayout>
</template>

<script setup lang="ts">
import TableItemsComponent from '@/components/TableItemsComponent.vue';
import { useOperatorStore } from '@/store';
import MainLayout from '@/views/layouts/MainLayout.vue';
import { onMounted } from 'vue';

const operatorStore = useOperatorStore();

onMounted(async () => {
  await operatorStore.fetchOperators()
})

const openGames = (operator: any) => console.log('open games', operator);
const openUrl = (operator: any) => console.log('openUrl', operator);

</script>

<style scoped></style>