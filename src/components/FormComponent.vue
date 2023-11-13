<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-6">
      <fwb-input placeholder="JohnDoe" :label="$t('inputs.user_name')" v-model="username"
        class="dark:bg-slate-900/5 outline-none" />
    </div>
    <div class="mb-6">
      <fwb-input :label="$t('inputs.password')" v-model="password" type="password"
        class="dark:bg-slate-900/5 outline-none" />
    </div>
    <div class="flex items-start mb-6">
      <fwb-checkbox id="rememberMe" :required="false" :label="$t('inputs.remember_me')" />
    </div>
    <div class="mb-6">
      <fwb-a href="#" class=" dark:text-blue-500">
        {{ $t('inputs.forgot_password') }}
      </fwb-a>
    </div>
    <div class="flex justify-end">
      <fwb-button color="pink">{{ $t('inputs.get_in') }}</fwb-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput, FwbCheckbox, FwbButton, FwbA } from 'flowbite-vue'
import { useLoginStore } from '@/store';
import router from '@/router';

const username = ref('');
const password = ref('');
const loginStore = useLoginStore();

const reset = () => {
  username.value = ''
  password.value = ''
}

const handleSubmit = async () => {
  await loginStore.login(username.value, password.value);
  reset()
  if (!loginStore.isLogged) return
  router.push({ name: 'home' })
}
</script>

<style scoped></style>