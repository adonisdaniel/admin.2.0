<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-6">
      <InputComponent :id="'text'" :placeholder="'JohnDoe'" :type="'text'" :title="$t('inputs.user_name')"
        :required="false" :model-value="username" @update:model-value="newvalue => username = newvalue" />
    </div>
    <div class="mb-6">
      <InputComponent :id="'password'" :type="'password'" :title="$t('inputs.password')" :required="false"
        :model-value="password" @update:model-value="newvalue => password = newvalue" />
    </div>
    <div class="flex items-start mb-6">
      <CheckBoxComponent id="rememberMe" :required="false" :title="$t('inputs.remember_me')" />
    </div>
    <div class="mb-6">
      <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
        {{ $t('inputs.forgot_password') }}
      </a>
    </div>
    <div class="flex justify-end">
      <ButtonComponent :text="$t('inputs.get_in')" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import CheckBoxComponent from './CheckBoxComponent.vue';
import InputComponent from './InputComponent.vue';
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