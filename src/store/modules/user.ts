import { defineStore } from 'pinia'
import type { User } from '@/interfaces/User'
import { useLoginStore } from '..'

interface Store {
  user: User
  token: string
}

const initialUser = {
  _id: '',
  client: '',
  createdAt: new Date(),
  currencies: [],
  email: '',
  lastName: '',
  name: '',
  operator: '',
  password: '',
  role: { _id: '', name: '' },
  status: false,
  tokenWallet: '',
  updatedAt: new Date(),
  userClient: false,
  userName: ''
}

const useUserStore = defineStore('user', {
  state: (): Store => ({
    user: initialUser,
    token: ''
  }),
  actions: {
    setUser(payload: User) {
      this.user = payload
      localStorage.setItem('user', JSON.stringify(payload))
    },
    setToken(payload: string) {
      this.token = payload
      localStorage.setItem('token', payload)
    },
    logout() {
      const loginStore = useLoginStore();
      loginStore.logged = false;
      this.setUser(initialUser);
      this.setToken('');
    }
  },
  getters: {
    getUserRole(): string {
      return this.user.role.name
    },
    getUserFromStorage(): User {
      return JSON.parse(localStorage.getItem('user')!) as User
    },
  }
})

export { useUserStore }
