import { roulette_api } from '@/api/roulette_api';
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    logged: false
  }),
  actions: {
    setLogged() {
      this.logged = !this.logged;
    },
    async login(userName: string, password: string) {
      try {
        const { data } = await roulette_api.post("auth/login", {
          userName,
          password,
        })
        console.log('data', data);

      } catch (error) {
        console.log('ERROR LOGIN', error);

      }
    }
  }
})

export { useLoginStore }