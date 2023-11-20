<template>
  <fwb-table v-if="bodyItems.length">
    <fwb-table-head>
      <fwb-table-head-cell v-for="(item, i) in headerItems" :key="i">
        <span :class="{ 'sr-only': item.hidden }">{{ item.info }}</span>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="(item, i) in bodyItems" :key="i">
        <fwb-table-cell>{{ item.name }}</fwb-table-cell>
        <fwb-table-cell v-if="item.logo">
          <div class="flex justify-start">
            <fwb-avatar :img="item.logo" />
          </div>
        </fwb-table-cell>
        <fwb-table-cell>
          <div class="flex justify-start">
            <fwb-button @click="$emit('handle-url', item)">{{ item.url.info }}</fwb-button>
          </div>
        </fwb-table-cell>
        <fwb-table-cell>
          <div class="flex justify-start">
            <fwb-button @click="$emit('handle-games', item)">{{ item.games.info }}</fwb-button>
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
        <fwb-table-cell v-if="item.itemHasActions">
          <div class="flex justify-start">
            <fwb-dropdown text=". . ." placement="left">
              <fwb-list-group>
                <fwb-list-group-item v-for="(config, i) in item.configs" :key="i"
                  @click="handleAction(config?.event, item)">
                  {{ config?.title }}
                </fwb-list-group-item>
              </fwb-list-group>
            </fwb-dropdown>
          </div>
        </fwb-table-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
  <fwb-alert icon type="info" v-else>
    No hay resultados.
  </fwb-alert>
</template>

<script setup lang="ts">
import {
  FwbButton,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
  FwbAvatar,
  FwbDropdown,
  FwbListGroup,
  FwbListGroupItem,
  FwbAlert
} from 'flowbite-vue'
import type { typeHeaderItems, typeBodyItems } from "@/interfaces/headerItems";

defineProps<{
  headerItems: typeHeaderItems[],
  bodyItems: typeBodyItems[]
}>()

const emit = defineEmits(['handle-url', 'handle-games', 'handle-edit', 'handle-remove'])

const handleAction = (event: any, item: typeBodyItems) => {
  emit(event, item)
}
</script>