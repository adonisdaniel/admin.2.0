import type { typeRoutes } from "@/interfaces/typeRoutes";
import {
  CLIENTS_ROUTE_NAME,
  CRUPIERS_ROUTE_NAME,
  CURRENCIES_ROUTE_NAME,
  DRAGONS_ROUTE_NAME,
  EXCHANGE_APIS_ROUTE_NAME,
  GAMES_ROUTE_NAME,
  GENERAL_PAYMENT_ROUTE_NAME,
  HELP_ROUTE_NAME,
  HOME_ROUTE_NAME,
  INDIVIDUAL_PAYMENT_ROUTE_NAME,
  LOGIN_ROUTE_NAME,
  OPERATOR_ROUTE_NAME,
  PAYMENTS_ROUTE_NAME,
  PLAYERS_ROUTE_NAME,
  REPORTS_ROUTE_NAME,
  REPORTS_TRANSACTION_ROUTE_NAME,
  ROULETTES_ROUTE_NAME,
  TECHNICAL_SUPPORT_ROUTE_NAME,
  USERS_ROUTE_NAME
} from "@/store/helpers/CONSTANTS";

import {
  ClientsViewVue,
  CrupiersViewVue,
  CurrenciesViewVue,
  DragonTigersViewVue,
  ExchangeApisViewVue,
  GeneralPaymentsViewVue,
  HelpViewVue,
  HomeViewVue,
  IndividualPaymentsViewVue,
  LoginViewVue,
  OperatorsViewVue,
  PlayersViewVue,
  RoulettesViewsVue,
  TechnicalSupportViewVue,
  TransactionsViewVue,
  UsersViewVue
} from "@/views/pages";

const routes: typeRoutes[] = [
  // AUTH
  {
    path: '/login',
    name: LOGIN_ROUTE_NAME,
    component: LoginViewVue
  },
  // AUTH
  {
    path: '/',
    name: HOME_ROUTE_NAME,
    component: HomeViewVue
  },
  {
    path: '/currencies',
    name: CURRENCIES_ROUTE_NAME,
    component: CurrenciesViewVue
  },
  {
    path: '/clients',
    name: CLIENTS_ROUTE_NAME,
    component: ClientsViewVue
  },
  {
    path: '/operators',
    name: OPERATOR_ROUTE_NAME,
    component: OperatorsViewVue
  },
  {
    path: '/players',
    name: PLAYERS_ROUTE_NAME,
    component: PlayersViewVue
  },
  // GAMES
  {
    path: '/roulettes',
    name: ROULETTES_ROUTE_NAME,
    component: RoulettesViewsVue,
    meta: { subMenu: true, parent: GAMES_ROUTE_NAME }
  },
  {
    path: '/dragon-tiger',
    name: DRAGONS_ROUTE_NAME,
    component: DragonTigersViewVue,
    meta: { subMenu: true, parent: GAMES_ROUTE_NAME }
  },
  // GAMES
  {
    path: '/users',
    name: USERS_ROUTE_NAME,
    component: UsersViewVue
  },
  // PAYMENTS
  {
    path: '/payments/individual',
    name: INDIVIDUAL_PAYMENT_ROUTE_NAME,
    component: IndividualPaymentsViewVue,
    meta: { subMenu: true, parent: PAYMENTS_ROUTE_NAME }
  },
  {
    path: '/payments/general',
    name: GENERAL_PAYMENT_ROUTE_NAME,
    component: GeneralPaymentsViewVue,
    meta: { subMenu: true, parent: PAYMENTS_ROUTE_NAME }
  },
  // PAYMENTS
  // REPORTS
  {
    path: '/reports/transactions',
    name: REPORTS_TRANSACTION_ROUTE_NAME,
    component: TransactionsViewVue,
    meta: { subMenu: true, parent: REPORTS_ROUTE_NAME }
  },
  // REPORTS
  {
    path: '/tecnhical-support',
    name: TECHNICAL_SUPPORT_ROUTE_NAME,
    component: TechnicalSupportViewVue
  },
  {
    path: '/exchange-apis',
    name: EXCHANGE_APIS_ROUTE_NAME,
    component: ExchangeApisViewVue
  },
  {
    path: '/crupiers',
    name: CRUPIERS_ROUTE_NAME,
    component: CrupiersViewVue
  },
  {
    path: '/help',
    name: HELP_ROUTE_NAME,
    component: HelpViewVue
  },
]

export default routes