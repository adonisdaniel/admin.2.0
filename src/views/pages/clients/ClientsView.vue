<template>
  <MainLayout>
    <TableItemsComponent :header-items="clientStore.getTableHeader" :body-items="clientStore.getTableBody"
      @handle-url="openUrl" @handle-games="openGames" @handle-edit="edit" @handle-remove="remove" />
  </MainLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useClientsStore } from '@/store'
import MainLayout from '@/views/layouts/MainLayout.vue';
import TableItemsComponent from '@/components/TableItemsComponent.vue';
import type { typeBodyItems } from '@/interfaces/headerItems';

const clientStore = useClientsStore();

onMounted(async () => {
  await clientStore.fetchClients();
})

const openUrl = (client: typeBodyItems) => {
  console.log('abrir url', client);
}

const openGames = () => {
  console.log('abrir juegos');
}

const edit = (item: typeBodyItems) => console.log('edit', item);
const remove = (item: typeBodyItems) => console.log('remove', item);

</script>

<style scoped></style>