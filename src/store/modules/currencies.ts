import { roulette_api } from '@/api/roulette_api'
import type { Options } from '@/interfaces/api'
import type { BodyTable, Currency, CurrencyRouletteAPIResponse } from '@/interfaces/currencies'
import { defineStore } from 'pinia'
import { HANDLE_EDIT } from '../helpers/CONSTANTS'

const useCurrenciesStore = defineStore('currenciesStore', {
  state: () => ({
    currencies: <Currency[]>[]
  }),
  getters: {
    getCurrencies(state): Currency[] {
      return state.currencies
    },
    getBodyTable(state) {
      return (query: string = ''): BodyTable[] =>
        state.currencies
          .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
          .map(
            ({ name, short, symbol, usdExchange, exchangeApi, status, updatedAt }: Currency) => ({
              name,
              short,
              symbol,
              usdExchange,
              none: '',
              exchangeApi: {
                isActive: exchangeApi,
                info: exchangeApi ? 'ACTIVA' : 'DESACTIVADA'
              },
              status: {
                isActive: status,
                info: status ? 'ACTIVA' : 'DESACTIVADA'
              },
              updatedAt,
              itemHasActions: true,
              configs: {
                edit: {
                  title: 'EDITAR',
                  event: HANDLE_EDIT
                }
              }
            })
          )
    }
  },
  actions: {
    async fetchCurrencies(options: Options = {}) {
      try {
        const { data, status } = await roulette_api.get('/currencies', options)

        if (status > 201) return (this.currencies = [])

        const { currencies } = data as CurrencyRouletteAPIResponse

        this.currencies = currencies
      } catch (error) {
        console.log('ERROR FETCHING CURRENCIES', error)
        this.currencies = []
      }
    }
  }
})

export { useCurrenciesStore }
