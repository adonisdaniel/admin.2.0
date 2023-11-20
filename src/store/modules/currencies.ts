import { roulette_api } from "@/api/roulette_api";
import type { BodyTable, Currency, CurrencyRouletteAPIResponse } from "@/interfaces/currencies";
import { defineStore } from "pinia";

const useCurrenciesStore = defineStore('currenciesStore', {
  state: () => ({
    currencies: <Currency[]>[]
  }),
  getters: {
    getCurrencies(): Currency[] {
      return this.currencies
    },
    getBodyTable(): BodyTable[] {
      return this.currencies.map(({ name, short, symbol, usdExchange, exchangeApi, status, updatedAt }: Currency) => ({
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
        updatedAt
      }))
    }
  },
  actions: {
    async fetchCurrencies() {
      try {
        const { data, status } = await roulette_api.get('/currencies');

        if (status > 201) return this.currencies = [];

        const { currencies } = data as CurrencyRouletteAPIResponse;

        this.currencies = currencies;

      } catch (error) {
        console.log('ERROR FETCHING CURRENCIES', error);
        this.currencies = []
      }
    }
  }
})

export { useCurrenciesStore }