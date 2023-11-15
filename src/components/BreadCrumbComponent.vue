<template>
  <fwb-breadcrumb class="mb-4">
    <fwb-breadcrumb-item home @click="$router.push({ name: 'home' })">
      HOME
    </fwb-breadcrumb-item>
    <fwb-breadcrumb-item v-for="(item, i) in getBreadCrumbs" :key="i" @click="$router.push({ name: item })">
      {{ item.toUpperCase() }}
    </fwb-breadcrumb-item>
  </fwb-breadcrumb>
</template>

<script setup lang="ts">
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'
import { useMenuStore } from '@/store';

const menuStore = useMenuStore();
const { getBreadCrumbs } = menuStore;
</script>