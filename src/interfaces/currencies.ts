import type { typeActions } from './headerItems'

export interface CurrencyRouletteAPIResponse {
  ok: boolean
  currencies: Currency[]
}

export interface Currency {
  _id: string
  name: string
  short: string
  symbol: string
  usdExchange: number
  createdAt: Date
  updatedAt: Date
  __v: number
  status: boolean
  exchangeApi: boolean
  exchangeApiURL?: null
}

type TypeActive = {
  isActive: boolean
  info: string
}

export interface BodyTable {
  name: string
  short: string
  symbol: string
  usdExchange: number
  none: ''
  exchangeApi: TypeActive
  status: TypeActive
  updatedAt: Date
  itemHasActions: boolean
  configs?: typeActions
}
