<template>
  <MainLayout>
    <TableItemsComponent :header-items="clientStore.getTableHeader" :body-items="clientStore.getTableBody"
      @handle-url="openUrl" @handle-games="openGames" @handle-edit="edit" @handle-remove="remove" />
    <URLClient ref="urlClient" :client="clientSelected" />
    <GamesMenuComponent ref="gamesMenu" />
    <EditClient ref="editClient" />
  </MainLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useClientsStore } from '@/store'
import MainLayout from '@/views/layouts/MainLayout.vue';
import TableItemsComponent from '@/components/TableItemsComponent.vue';
import GamesMenuComponent from '@/components/GamesMenuComponent.vue';
import URLClient from './components/URLClient.vue';
import type { typeBodyItems } from '@/interfaces/headerItems';
import EditClient from './components/EditClient.vue';

const urlClient = ref();
const gamesMenu = ref();
const clientSelected = ref();
const editClient = ref<InstanceType<typeof EditClient> | null>(null);
const clientStore = useClientsStore();

onMounted(async () => {
  await clientStore.fetchClients();
})

const openUrl = (client: typeBodyItems) => {
  clientSelected.value = client;
  urlClient.value.isShowModal = true;
}

const openGames = () => {
  gamesMenu.value.isShowModal = true
}

const edit = (item: typeBodyItems) => {
  editClient.value!.clientToUpdate = item;
  editClient.value!.isShowModal = true;
}
const remove = (item: typeBodyItems) => console.log('remove', item);

</script>

<style scoped></style>