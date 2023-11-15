<template>
  <!-- <TopBar />
  <SideBarComponent /> -->
  <nav class="sticky top-0 z-50 w-full bg-white  border-gray-200 dark:bg-gray-900 dark:border-gray- ">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
            @click="toggleMenu">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user" @click="toggleConfig">
                <span class="sr-only">Open user menu</span>
                <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                </svg>
              </button>
            </div>
            <UserMenu ref="dropdownUser" />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="flex h-screen">
    <aside id="logo-sidebar"
      class="h-full transition-transform  bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0 -translate-x-full shrink-0 absolute md:fixed top-0 w-screen md:w-max pt-3 z-50"
      aria-label="Sidebar" ref="sidebar" data-sidebar>
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <SideBarComponent @handle-menu="toggleMenu" />
        </ul>
      </div>
    </aside>

    <div class="bg-slate-800 min-h-screen w-full shrink text-slate-300 pl-2 md:pl-64">
      <div class="p-6">
        <BreadCrumbComponent />
        <slot />

      </div>
      <FooterComponent class="fixed bottom-0 left-0 p-3 bg-slate-950 text-white w-full text-sm z-40" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';
import UserMenu from '@/components/UserMenu.vue';
// import TopBar from '@/components/TopBarComponent.vue';
import { ref } from 'vue';

const sidebar = ref();
const dropdownUser = ref();

const toggleMenu = () => {
  sidebar.value.classList.toggle('-translate-x-full')
}

const toggleConfig = () => {
  const el = dropdownUser.value.$el;
  el.classList.toggle('hidden')
  el.classList.toggle('absolute')
}

</script>

<style scoped></style>