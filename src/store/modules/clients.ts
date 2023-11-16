import { defineStore } from "pinia";
import type { typeBodyItems, typeHeaderItems } from "@/interfaces/headerItems";
import type { ClientsRouletteAPI, Client } from "@/interfaces/clients";
import { mockClients, tableHeader } from "../helpers/clientsTableItems";
import { roulette_api } from "@/api/roulette_api";

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
      return this.clients.map(({ _id, name, logo, status, endpointAuth, endpointBet, endpointRollback, endpointWin }) => ({
        name,
        logo,
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
          edit: { title: 'EDITAR', event: 'handle-edit' },
          remove: { title: 'REMOVER', event: 'handle-remove' }
        }
      }))
    }
  },
  actions: {
    async fetchClients() {
      try {
        const { data, status } = await roulette_api.get('clients');

        if (status > 201) return this.clients = []

        const { clients } = data as ClientsRouletteAPI;
        this.clients = clients;
      } catch (error) {
        console.log('ERROR FETCHING CLIENTS', error);
      }
    }
  }
})

export { useClientsStore }