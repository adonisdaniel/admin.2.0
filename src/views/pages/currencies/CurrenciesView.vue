<template>
  <MainLayout>
    <TableBar @select-entries="showEntries" @search-entries="searchEntries" />
    <TableComponent :header-items="tableHeader">
      <TableBody :items="currenciesStore.getBodyTable(query)" />
    </TableComponent>
    <Pagination @handle-page="handlePage" ref="pagination" />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/views/layouts/MainLayout.vue'
import TableBar from '@/components/TableBarComponent.vue'
import Pagination from '@/components/PaginationComponent.vue'
import { useCurrenciesStore } from '@/store'
import { onMounted, ref } from 'vue'
import TableComponent from './components/TableComponent.vue'
import { tableHeader } from '@/store/helpers/currenciesTableItems'
import TableBody from './components/TableBody.vue'
import type { Options } from '@/interfaces/api'
import type { Ref } from 'vue'

const query = ref('')
const pagination = ref()
const options: Ref<Options> = ref({
  params: { limit: 10, page: 1 }
})

const showEntries = async (entries: string) => {
  await getCurrencies({ params: { limit: Number(entries) } })
}

const searchEntries = (value: string) => (query.value = value)

const handlePage = async (value: number) => {
  console.log('handlePage', value)
  console.log('pagination', pagination.value.currentPage)
  await currenciesStore.fetchCurrencies({ params: { page: value } })
}

const currenciesStore = useCurrenciesStore()

const getCurrencies = async (options: Options = {}) => {
  await currenciesStore.fetchCurrencies(options)
}

onMounted(() => {
  getCurrencies()
})
</script>

<style scoped></style>
