import type { typeBodyItems, typeHeaderItems } from "@/interfaces/headerItems";

export const tableHeader: typeHeaderItems[] = [
  { info: 'name' },
  { info: 'url' },
  { info: 'juegos' },
  { info: 'status' },
  { info: 'actions', hidden: true }
]

export const mockOperators: typeBodyItems[] = []