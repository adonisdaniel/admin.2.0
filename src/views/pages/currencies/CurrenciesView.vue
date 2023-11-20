<template>
  <MainLayout>
    <TableBar @select-entries="showEntries" @search-entries="searchEntries" />
    <TableComponent :header-items="tableHeader">
      <TableBody />
    </TableComponent>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/views/layouts/MainLayout.vue';
import TableBar from '@/components/TableBarComponent.vue'
import { useCurrenciesStore } from '@/store';
import { onMounted } from 'vue'
import TableComponent from './components/TableComponent.vue';
import { tableHeader } from '@/store/helpers/currenciesTableItems'
import TableBody from './components/TableBody.vue';

const showEntries = (entries: string) => console.log('entries', entries);
const searchEntries = (query: string) => console.log('query', query);

const currenciesStore = useCurrenciesStore();

const getCurrencies = async () => {
  await currenciesStore.fetchCurrencies()
  console.log('', currenciesStore.getCurrencies);
}

onMounted(() => {
  getCurrencies()
})

</script>

<style scoped></style>