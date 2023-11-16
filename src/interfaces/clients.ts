export interface ClientsRouletteAPI {
  ok: boolean;
  msg: string;
  clients: Client[];
}

export interface Client {
  status: boolean;
  available: boolean;
  useLogo: boolean;
  _id: string;
  name: string;
  logo: string;
  token: string;
  endpointAuth: string;
  endpointBet: string;
  endpointWin: string;
  endpointRollback: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  loaderLogo?: string;
}
