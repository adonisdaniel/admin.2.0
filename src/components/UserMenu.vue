<template>
  <div
    class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 top-14 right-2 md:right-3 md:top-12"
    id="dropdown-user">
    <div class="px-4 py-3" role="none">
      <p class="text-sm text-gray-900 dark:text-white" role="none">
        {{ userName }}
      </p>
      <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
        {{ email }}
      </p>
    </div>
    <ul role="none">
      <li class="flex mb-0.5 p-1">
        <fwb-button class="w-full">Profile</fwb-button>
      </li>
      <li class="flex mb-0.5 p-1">
        <fwb-button class="w-full">Settings</fwb-button>
      </li>
      <li class="flex mb-0.5 p-1">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full justify-between"
          type="button" @click="handleDropdown">
          <span>Language</span>
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4" />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div ref="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute md:right-full md:mr-1 right-0 top-3/4 mt-5">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li v-for="(lang, i) in languages" :key="i">
              <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {{ lang }}
              </span>
            </li>
          </ul>
        </div>

      </li>
      <li class="flex mb-0.5 p-1">
        <fwb-button @click="signOut" class="w-full">Sign out</fwb-button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/store';
import { FwbButton } from 'flowbite-vue';
import { computed } from 'vue';
import { ref } from 'vue';

const userStore = useUserStore();
const userName = ref('');
const email = ref('');

const verifyUser = () => {
  const { user } = userStore;
  if (!user) return signOut();
  const { userName: user_name, email: user_email } = user;
  userName.value = user_name;
  email.value = user_email;
}

const dropdown = ref();
const languages = computed(() => ['ES', 'EN'])

const signOut = () => {
  userStore.logout();
  router.push({ name: 'login' })
}

const handleDropdown = () => {
  dropdown.value.classList.toggle('hidden')
}

verifyUser()
</script>

<style scoped></style>