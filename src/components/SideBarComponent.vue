<template>
  <template v-for="(item, i) in getMenuItems" :key="i">
    <!-- ITEMS WITHOUT SUB ITEMS -->

    <fwb-sidebar-item v-if="!item.subMenu" @click="router.push({ name: item.route })">
      <template #icon>
        <span v-html="item.icon"></span>
      </template>
      <template #default>
        {{ item.name }}
      </template>
    </fwb-sidebar-item>

    <!-- ITEMS WITH SUB ITEMS -->
    <fwb-sidebar-dropdown-item v-else>

      <template #icon>
        <span v-html="item.icon"></span>
      </template>

      <template #trigger><span class="px-2">{{ item.name }}</span></template>
      <template #default>
        <fwb-sidebar-item v-for="(subItem, j) in item.items" :key="j" class="pl-11"
          @click="router.push({ name: subItem.route })">
          <template #icon>
            <span v-html="subItem.icon"></span>
          </template>
          <template #default>
            {{ subItem.name }}
          </template>
        </fwb-sidebar-item>
      </template>
    </fwb-sidebar-dropdown-item>
  </template>
  <!-- <fwb-sidebar-item @click="router.push('/dashboard')">
    <template #icon>
      <svg
        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path
          d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
      </svg>
    </template>
    <template #default>Dashboard</template>
  </fwb-sidebar-item> -->
</template>

<script setup lang="ts">
import router from '@/router';
import { FwbSidebarItem, FwbSidebarDropdownItem } from 'flowbite-vue'
import { useMenuStore } from '@/store'
const menu = useMenuStore();
const { getMenuItems } = menu;

</script>