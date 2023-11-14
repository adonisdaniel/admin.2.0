<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useUserStore } from './store';

const userStore = useUserStore();

const setUserRole = () => {
  const user = userStore.getUserFromStorage;
  userStore.setUser(user);
}

setUserRole();

</script>

<template>
  <RouterView />
</template>