import type { typeBodyItems, typeHeaderItems } from "@/interfaces/headerItems";

export const tableHeader: typeHeaderItems[] = [
  { info: 'name' },
  { info: 'logo' },
  { info: 'url' },
  { info: 'juegos' },
  { info: 'status' },
  { info: 'actions', hidden: true }
]

export const mockClients: typeBodyItems[] = [
  {
    name: 'Client root',
    logo: 'https://pmd-studio.com/blog/wp-content/uploads/2012/04/good_clients.jpg',
    url: { info: 'urls', isAction: true },
    games: { info: 'Games', isAction: true },
    status: { info: 'ACTIVE', isActive: true },
    endpointAuth: '',
    endpointBet: '',
    endpointRollback: '',
    endpointWin: '',
    _id: '',
    itemHasActions: true
  },
  {
    name: 'Client 2',
    logo: '',
    url: { info: 'url', isAction: true },
    games: { info: 'Games', isAction: true },
    status: { info: 'ACTIVE', isActive: true },
    endpointAuth: '',
    endpointBet: '',
    endpointRollback: '',
    endpointWin: '',
    _id: '',
    itemHasActions: true
  }
]