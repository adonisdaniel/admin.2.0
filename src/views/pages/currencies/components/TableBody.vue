<template>
  <fwb-table-row v-for="(item, i) in items" :key="i">
    <fwb-table-cell>{{ item.name }}</fwb-table-cell>
    <fwb-table-cell>{{ item.short }}</fwb-table-cell>
    <fwb-table-cell>{{ item.symbol }}</fwb-table-cell>
    <fwb-table-cell>{{ item.usdExchange }}</fwb-table-cell>
    <fwb-table-cell>{{ item.none }}</fwb-table-cell>
    <fwb-table-cell>
      <div class="flex justify-start items-center">
        <div
          class="h-2.5 w-2.5 rounded-full me-2"
          :class="{
            'bg-green-500': item.exchangeApi.isActive,
            'bg-red-500': !item.exchangeApi.isActive
          }"
        ></div>
        {{ item.exchangeApi.info }}
      </div>
    </fwb-table-cell>
    <fwb-table-cell>
      <div class="flex justify-start items-center">
        <div
          class="h-2.5 w-2.5 rounded-full me-2"
          :class="{
            'bg-green-500': item.status.isActive,
            'bg-red-500': !item.status.isActive
          }"
        ></div>
        {{ item.status.info }}
      </div>
    </fwb-table-cell>
    <fwb-table-cell>
      <span class="whitespace-nowrap">{{ item.updatedAt }}</span>
    </fwb-table-cell>
    <fwb-table-cell v-if="item.itemHasActions">
      <div class="flex justify-start whitespace-nowrap">
        <fwb-dropdown text=". . ." placement="left">
          <fwb-list-group>
            <fwb-list-group-item
              v-for="(config, i) in item.configs"
              :key="i"
              @click="handleAction(config?.event, item)"
            >
              {{ config?.title }}
            </fwb-list-group-item>
          </fwb-list-group>
        </fwb-dropdown>
      </div>
    </fwb-table-cell>
  </fwb-table-row>
</template>

<script setup lang="ts">
import type { BodyTable } from '@/interfaces/currencies'
import { useCurrenciesStore } from '@/store'
import {
  FwbTableRow,
  FwbTableCell,
  FwbDropdown,
  FwbListGroup,
  FwbListGroupItem
} from 'flowbite-vue'
import { HANDLE_EDIT } from '@/store/helpers/CONSTANTS'

const store = useCurrenciesStore()

defineProps<{ items: BodyTable[] }>()

const emit = defineEmits([HANDLE_EDIT])

const handleAction = (event: any, item: BodyTable) => {
  emit(event, item)
}
</script>
