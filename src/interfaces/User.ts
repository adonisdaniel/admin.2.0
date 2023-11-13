export type User = {
  currencies: string[],
  status: boolean,
  userClient: boolean,
  _id: string,
  email: string,
  lastName: string,
  name: string,
  password: string,
  userName: string,
  client: string,
  createdAt: Date,
  updatedAt: Date,
  role: {
    _id: string,
    name: string
  },
  tokenWallet: string,
  operator: string
}