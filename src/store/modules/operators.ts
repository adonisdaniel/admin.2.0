import { defineStore } from "pinia";
import { roulette_api } from "@/api/roulette_api";
import type { Operator, OperatorsRouletteAPI } from "@/interfaces/operators";
import type { typeBodyItems, typeHeaderItems } from "@/interfaces/headerItems";
import { mockOperators, tableHeader } from "../helpers/operatorsTableItems";

const useOperatorStore = defineStore('operatorStore', {
  state: () => ({
    tableHeader: tableHeader,
    tableItems: mockOperators,
    operators: <Operator[] | []>[]
  }),
  getters: {
    getTableHeader(): typeHeaderItems[] {
      return this.tableHeader
    },
    getTableBody(): typeBodyItems[] {
      return this.operators.map(({ _id, name, status, endpointAuth, endpointBet, endpointRollback, endpointWin }) => ({
        _id,
        name,
        endpointAuth,
        endpointBet,
        endpointRollback,
        endpointWin,
        itemHasActions: true,
        status: { info: status ? 'DISPONIBLE' : 'INHABILITADO', isActive: status },
        games: { info: 'GAMES', isAction: true },
        url: { info: 'URLs', isAction: true },
        configs: {
          edit: { title: 'EDITAR', event: 'handle-edit' },
          remove: { title: 'REMOVER', event: 'handle-edit' },
        }
      }))
    }
  },
  actions: {
    async fetchOperators() {
      try {
        const { data, status } = await roulette_api.get('operators')

        if (status > 201) return this.operators = [];

        const { operators } = data as OperatorsRouletteAPI;
        this.operators = operators;
      } catch (error) {
        console.log('ERROR FETCHING OPERATORS', error);
      }
    }
  }
})

export { useOperatorStore }