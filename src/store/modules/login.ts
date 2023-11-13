import { roulette_api } from '@/api/roulette_api';
import { defineStore } from 'pinia'
import { useUserStore } from './user';

// const userStore = useUserStore();

const useLoginStore = defineStore('login', {
  state: () => ({
    logged: false
  }),
  actions: {
    setLogged() {
      this.logged = !this.logged;
    },
    async login(userName: string, password: string) {
      const userStore = useUserStore();
      try {
        const { data, status } = await roulette_api.post("auth/login", {
          userName,
          password,
        })

        if (status > 201) return this.logged = false;

        const { user, token } = data;

        this.logged = true;
        userStore.setToken(token);
        userStore.setUser(user);
      } catch (error) {
        console.log('ERROR LOGIN', error);
        this.logged = false;
      }
    }
  },
  getters: {
    isLogged(): boolean {
      return this.logged
    }
  }
})

export { useLoginStore }