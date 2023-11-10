<template>
  <div class="min-h-screen min-w-full overflow-hidden flex items-center bg-slate-950 text-white bg-light">
    <div class="w-full grid grid-cols-2">
      <div>
        <div class="login-img w-full"></div>
      </div>
      <div class="justify-self-center self-center w-10/12 grid justify-center grid-cols-1">
        <div
          class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800/75 dark:border-gray-700 dark:hover:bg-gray-700/90 w-4/5 justify-self-center">
          <div class="my-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-rose-200 text-center">{{
            $t('login.welcome') }}
          </div>
          <FormComponentVue />
        </div>
        <div class="mt-5 text-center">
          <p class="d-flex align-items-center justify-content-center">
            {{ new Date().getFullYear() }}
            <img src="@/assets/images/SPRINT_GAMING_PNG.png" alt="sprint gaming"
              class="inline-block w-auto h-10 rounded" />
            &copy; copyright
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormComponentVue from '@/components/FormComponent.vue'
// import { useLoginStore } from '@/store/index'
// import { ref } from 'vue'
// const store = useLoginStore();

// const logged = computed(() => store.logged)
</script>

<style scoped>
.login-img {
  background: url("../../../assets/images/img-left.png");
  background-position: center;
  display: block;
  height: 100vh;
  background-size: cover;
  background-position-x: 70px;
}

.bg-light {
  background: url("../../../assets/images/bg.jpg");
  background-position: center;
  display: block;
  height: 100vh;
  background-size: cover;
}
</style>