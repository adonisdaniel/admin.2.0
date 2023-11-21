import { defineStore } from 'pinia'
import type { typeBodyItems, typeHeaderItems } from '@/interfaces/headerItems'
import type { ClientsRouletteAPI, Client, CLientUpdate } from '@/interfaces/clients'
import { mockClients, tableHeader } from '../helpers/clientsTableItems'
import { roulette_api } from '@/api/roulette_api'
import { HANDLE_EDIT, HANDLE_REMOVE } from '../helpers/CONSTANTS'

const useClientsStore = defineStore('clientsStore', {
  state: () => ({
    tableHeader: tableHeader,
    tableItems: mockClients,
    clients: <Client[] | []>[]
  }),
  getters: {
    getTableHeader(): typeHeaderItems[] {
      return this.tableHeader
    },
    getTableBody(): typeBodyItems[] {
      return this.clients.map(
        ({
          _id,
          name,
          logo,
          status,
          endpointAuth,
          endpointBet,
          endpointRollback,
          endpointWin,
          token
        }) => ({
          name,
          logo,
          token,
          games: { info: 'GAMES', isAction: true },
          url: { info: 'URL', isAction: true },
          status: {
            info: status ? 'ACTIVO' : 'INACTIVO',
            isActive: status
          },
          endpointAuth,
          endpointBet,
          endpointRollback,
          endpointWin,
          _id,
          itemHasActions: true,
          configs: {
            edit: { title: 'EDITAR', event: HANDLE_EDIT },
            remove: { title: 'REMOVER', event: HANDLE_REMOVE }
          }
        })
      )
    },
    getClients(): any {
      return this.clients.map(({ name, _id }) => ({ name, value: _id }))
    }
  },
  actions: {
    async fetchClients() {
      try {
        const { data, status } = await roulette_api.get('clients')

        if (status > 201) return (this.clients = [])

        const { clients } = data as ClientsRouletteAPI
        this.clients = clients
      } catch (error) {
        console.log('ERROR FETCHING CLIENTS', error)
      }
    },
    async updateClient(client: CLientUpdate) {
      console.log('update', client)
    }
  }
})

export { useClientsStore }
