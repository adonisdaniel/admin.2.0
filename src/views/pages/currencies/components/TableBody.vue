<template>
  <fwb-table-row v-for="(item, i) in store.getBodyTable" :key="i">
    <fwb-table-cell>{{ item.name }}</fwb-table-cell>
    <fwb-table-cell>{{ item.short }}</fwb-table-cell>
    <fwb-table-cell>{{ item.symbol }}</fwb-table-cell>
    <fwb-table-cell>{{ item.usdExchange }}</fwb-table-cell>
    <fwb-table-cell>{{ item.none }}</fwb-table-cell>
    <fwb-table-cell>
      <div class="flex justify-start items-center">
        <div class="h-2.5 w-2.5 rounded-full me-2" :class="{
          'bg-green-500': item.exchangeApi.isActive,
          'bg-red-500': !item.exchangeApi.isActive,
        }"></div>
        {{ item.exchangeApi.info }}
      </div>
    </fwb-table-cell>
    <fwb-table-cell>
      <div class="flex justify-start items-center">
        <div class="h-2.5 w-2.5 rounded-full me-2" :class="{
          'bg-green-500': item.status.isActive,
          'bg-red-500': !item.status.isActive,
        }"></div>
        {{ item.status.info }}
      </div>
    </fwb-table-cell>
    <fwb-table-cell>
      <span class="whitespace-nowrap">{{ item.updatedAt }}</span>
    </fwb-table-cell>
  </fwb-table-row>
</template>

<script setup lang="ts">
import { useCurrenciesStore } from '@/store';
import { FwbTableRow, FwbTableCell } from 'flowbite-vue';
const store = useCurrenciesStore();

</script>