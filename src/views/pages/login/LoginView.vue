<template>
  <div class="min-h-screen min-w-full overflow-hidden flex items-center bg-slate-950 text-white bg-light">
    <div class="max-w-7xl mx-auto flex flex-col justify-center min-h-screen md:grid md:grid-cols-2">
      <div>
        <div class="login-img w-full min-h-screen absolute top-0 md:relative"></div>
      </div>
      <div class="justify-self-center self-center w-10/12 grid justify-center grid-cols-1 z-50">
        <div
          class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800/75 dark:border-gray-700 dark:hover:bg-gray-700/90 w-4/5 justify-self-center">
          <div class="my-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-rose-200 text-center">{{
            $t('login.welcome') }}
          </div>
          <FormComponentVue />
        </div>
        <div class="mt-5 text-center">
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue';
import FormComponentVue from '@/components/FormComponent.vue'
</script>

<style scoped>
.login-img {
  background: url("../../../assets/images/img-left.png");
  background-position: 25%;
  display: block;
  background-size: cover;
}

.bg-light {
  background: url("../../../assets/images/bg.jpg");
  background-position: center;
  display: block;
  height: 100vh;
  background-size: cover;
}
</style>