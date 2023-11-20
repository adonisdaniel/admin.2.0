export type typeHeaderItems = {
  info: string,
  hidden?: boolean
}

export type typeActions = {
  edit?: { title: string, event: string },
  remove?: { title: string, event: string }
}

export type typeBodyItems = {
  name: string,
  logo?: string,
  url: { info: string, isAction: boolean },
  games: { info: string, isAction: boolean },
  status: { info: string, isActive: boolean },
  endpointAuth: string
  endpointBet: string
  endpointWin: string
  endpointRollback: string
  _id: string,
  itemHasActions: boolean,
  configs?: typeActions,
  token?: string
}