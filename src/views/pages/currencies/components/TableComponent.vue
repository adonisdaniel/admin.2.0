<template>
  <fwb-table v-if="true">
    <fwb-table-head>
      <fwb-table-head-cell v-for="(item, i) in headerItems" :key="i">
        <span class="whitespace-nowrap" :class="{ 'sr-only': item.hidden }">{{ item.info }}</span>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <slot />
    </fwb-table-body>
  </fwb-table>
</template>

<script setup lang="ts">

import {
  FwbTable,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableBody
} from 'flowbite-vue'
import type { typeHeaderItems } from "@/interfaces/headerItems";

const props = defineProps<{
  // currencies: string[],
  headerItems: typeHeaderItems[]
}>()

</script>
