import type { Client } from "./clients";

export interface OperatorsRouletteAPI {
  ok: boolean;
  msg: string;
  operators: Operator[];
}

export interface Operator {
  status: boolean;
  available: boolean;
  _id: string;
  name: string;
  client: Client;
  operatorId: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  endpointWin: string;
  endpointAuth: string;
  endpointBet: string;
  endpointRollback: string;
  minBet?: null;
  maxBet?: null;
}

