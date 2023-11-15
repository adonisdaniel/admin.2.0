import type { typeMenuItems } from "@/interfaces/typeMenuItems";
import { ADMIN, CLIENTS_ROUTE_NAME, CRUPIERS_ROUTE_NAME, CURRENCIES_ROUTE_NAME, DRAGONS_ROUTE_NAME, EXCHANGE_APIS_ROUTE_NAME, GAMES_ROUTE_NAME, GENERAL_PAYMENT_ROUTE_NAME, HELP_ROUTE_NAME, HOME_ROUTE_NAME, INDIVIDUAL_PAYMENT_ROUTE_NAME, OPERATOR_ROUTE_NAME, PAYMENTS_ROUTE_NAME, PLAYERS_ROUTE_NAME, REPORTS_ROUTE_NAME, REPORTS_TRANSACTION_ROUTE_NAME, ROULETTES_ROUTE_NAME, TECHNICAL_SUPPORT_ROUTE_NAME, USERS_ROUTE_NAME } from "./CONSTANTS";

export const menuItems: typeMenuItems[] = [
  {
    route: HOME_ROUTE_NAME,
    name: 'Home',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M4 14.85V11q0-.2.075-.375T4.3 10.3l7-7q.15-.15.325-.225Q11.8 3 12 3t.375.075q.175.075.325.225l1.425 1.4ZM17 20v-8.175L13.075 7.9L15.2 5.775l4.5 4.525q.125.15.213.325Q20 10.8 20 11v8q0 .425-.288.712Q19.425 20 19 20ZM5 20q-.425 0-.713-.288Q4 19.425 4 19v-2.05l3-3V17h8.5v3Z"/></svg>`
  },
  {
    route: CURRENCIES_ROUTE_NAME,
    name: 'Currencies',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M2 19V5h20v14H2Zm3-5h3q.425 0 .713-.288T9 13v-1.75q0-.425-.288-.713T8 10.25H6.5V9.5H9V8H5v3.75h2.5v.75H5V14Zm6 2h8v-.55q0-1.125-1.1-1.788T15 13q-1.8 0-2.9.663T11 15.45V16Zm4-4q.825 0 1.413-.588T17 10q0-.825-.588-1.413T15 8q-.825 0-1.413.588T13 10q0 .825.588 1.413T15 12ZM4 17h16V7H4v10Zm0 0V7v10Z"/></svg>`,
    breadCrumbs: [CURRENCIES_ROUTE_NAME]
  },
  {
    route: CLIENTS_ROUTE_NAME,
    name: 'Clients',
    roles: [ADMIN],
    icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>`,
    breadCrumbs: [CLIENTS_ROUTE_NAME]

  },
  {
    route: OPERATOR_ROUTE_NAME,
    name: 'Operators',
    roles: [ADMIN],
    icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
  </svg>`,
    breadCrumbs: [OPERATOR_ROUTE_NAME]
  },
  {
    route: PLAYERS_ROUTE_NAME,
    name: 'Players',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="currentColor"><path d="M15.47 11.293a1 1 0 1 0-1.415 1.414a1 1 0 0 0 1.415-1.414Zm.707-2.121a1 1 0 1 1 1.414 1.414a1 1 0 0 1-1.414-1.414Zm3.535 2.121a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414Zm-3.535 2.121a1 1 0 1 1 1.414 1.415a1 1 0 0 1-1.414-1.415ZM6 13H4v-2h2V9h2v2h2v2H8v2H6v-2Z"/><path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14H7Zm10 2H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10Z" clip-rule="evenodd"/></g></svg>`,
    breadCrumbs: [PLAYERS_ROUTE_NAME]
  },
  {
    route: USERS_ROUTE_NAME,
    name: 'Users',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M28.4 124.8a6 6 0 0 0 8.4-1.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.59 5.59 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.69-22.26a38 38 0 1 0-46.22 0A65.32 65.32 0 0 0 128 110.7a65.32 65.32 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.69 65.69 0 0 0 27.2 116.4a6 6 0 0 0 1.2 8.4ZM176 38a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm-96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm119.11 160.13a38 38 0 1 0-46.22 0A65.32 65.32 0 0 0 128 214.7a65.32 65.32 0 0 0-24.89-16.57a38 38 0 1 0-46.22 0A65.69 65.69 0 0 0 27.2 220.4a6 6 0 1 0 9.6 7.2a54 54 0 0 1 86.4 0a6 6 0 0 0 8.4 1.19a5.59 5.59 0 0 0 1.19-1.19a54 54 0 0 1 86.4 0a6 6 0 0 0 9.6-7.21a65.74 65.74 0 0 0-29.68-22.26ZM80 142a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm96 0a26 26 0 1 1-26 26a26 26 0 0 1 26-26Z"/></svg>`,
    breadCrumbs: [USERS_ROUTE_NAME]
  },
  {
    route: TECHNICAL_SUPPORT_ROUTE_NAME,
    name: 'Soporte Tecnico',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 7V4.37A3.93 3.93 0 0 1 7 .5h0a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9 12.25a2 2 0 0 0 2-2h0V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25Z"/></svg>`,
    breadCrumbs: [TECHNICAL_SUPPORT_ROUTE_NAME]
  },
  {
    route: EXCHANGE_APIS_ROUTE_NAME,
    name: 'Apis de cambio',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>`,
    breadCrumbs: [EXCHANGE_APIS_ROUTE_NAME]
  },
  {
    route: CRUPIERS_ROUTE_NAME,
    name: 'Crupiers',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 24v-5.5h-3.5v-.25l.072-.15A24.999 24.999 0 0 0 15 7.35v-.328a8.58 8.58 0 0 1 3-.523c1.288 0 2.311.266 3 .523v.328c0 3.72.83 7.391 2.428 10.749l.072.15v.25H20V24M8 24v-6.5a2 2 0 0 1 2-2v-8s-1.5-1-4-1s-4 1-4 1v8a2 2 0 0 1 2 2V24M17.85 4.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25h-.3Zm-12 0s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C7.746 3.5 6.15 4.5 6.15 4.5h-.3Z"/></svg>`,
    breadCrumbs: [CRUPIERS_ROUTE_NAME]
  },
  {
    route: HELP_ROUTE_NAME,
    name: 'Ayuda',
    roles: [ADMIN],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm.05 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm.1-4.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.938t.75-.787q.575-.55.988-1.2t.412-1.45q0-1.275-1.038-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.113.638t.338.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2Z"/></svg>`,
    breadCrumbs: [HELP_ROUTE_NAME]
  },
  // MULTIPLE
  {
    route: GAMES_ROUTE_NAME,
    name: 'Juegos',
    roles: [ADMIN],
    subMenu: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M21 18h-2v-3a1 1 0 0 0-1-1h-5v-2.71l1.13.59a1 1 0 0 0 1.45-1.05l-.4-2.37l1.72-1.69a1 1 0 0 0 .26-1a1 1 0 0 0-.81-.68L14 4.72l-1.1-2.16a1 1 0 0 0-1.8 0L10 4.72l-2.39.35a1 1 0 0 0-.81.68a1 1 0 0 0 .26 1l1.76 1.71l-.4 2.37a1 1 0 0 0 1.45 1.05l1.13-.59V14H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1H7v-2h10v2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-9-9.37a1 1 0 0 0-.47.12l-.8.42l.15-.9a1 1 0 0 0-.29-.88l-.65-.64l.9-.13a1 1 0 0 0 .76-.54l.4-.82l.4.82a1 1 0 0 0 .76.54l.9.13l-.65.64a1 1 0 0 0-.29.88l.15.9l-.8-.42a1 1 0 0 0-.47-.12Z"/></svg>`,
    items: [
      {
        route: ROULETTES_ROUTE_NAME,
        name: 'Roulettes',
        roles: [ADMIN],
        icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>`,
        breadCrumbs: [ROULETTES_ROUTE_NAME]
      },
      {
        route: DRAGONS_ROUTE_NAME,
        name: 'Dragon Tigers',
        roles: [ADMIN],
        icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>`,
        breadCrumbs: [DRAGONS_ROUTE_NAME]
      },
    ]
  },
  {
    route: REPORTS_ROUTE_NAME,
    name: 'Reportes',
    roles: [ADMIN],
    subMenu: true,
    icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"/>
  </svg>`,
    items: [
      {
        route: REPORTS_TRANSACTION_ROUTE_NAME,
        name: 'Transactions',
        roles: [ADMIN],
        icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>`,
        breadCrumbs: [REPORTS_TRANSACTION_ROUTE_NAME]
      },
      {
        route: 'history',
        name: 'Historial',
        roles: ['OPERATOR'],
        icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>`
      }
    ]
  },
  {
    route: PAYMENTS_ROUTE_NAME,
    name: 'Pagos manuales',
    roles: [ADMIN],
    subMenu: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M20.437 7.104a3.823 3.823 0 0 0-.573-.523a4.725 4.725 0 0 0-1.157-3.74C17.623 1.619 15.775 1 13.214 1H7.001a1.892 1.892 0 0 0-1.864 1.592l-2.59 16.406a1.533 1.533 0 0 0 1.516 1.785h2.664l-.082.52A1.467 1.467 0 0 0 8.093 23h3.235a1.761 1.761 0 0 0 1.75-1.47l.641-4.031l.011-.055h.299c4.032 0 6.55-1.993 7.285-5.762a5.149 5.149 0 0 0-.877-4.578Zm-12.595 6.6l-.714 4.535l-.086.544H4.606L7.097 3h6.117c1.936 0 3.318.404 3.993 1.164a2.967 2.967 0 0 1 .607 2.733l-.018.113c-.012.076-.023.15-.044.246a5.846 5.846 0 0 1-2.005 3.67a6.677 6.677 0 0 1-4.217 1.183H9.707a1.88 1.88 0 0 0-1.865 1.595Zm11.51-2.405c-.552 2.828-2.243 4.145-5.323 4.145h-.484a1.761 1.761 0 0 0-1.75 1.473l-.65 4.074L8.717 21l.478-3.034l.612-3.853h1.719c.157 0 .295-.023.448-.029c.359-.012.717-.026 1.053-.068c.205-.025.393-.072.59-.108c.273-.05.545-.1.801-.171c.19-.053.368-.122.55-.186c.238-.085.474-.174.697-.279a7 7 0 0 0 .486-.257a6.771 6.771 0 0 0 .613-.392c.142-.102.282-.208.415-.32a6.564 6.564 0 0 0 .537-.52c.113-.12.228-.237.333-.367a7.09 7.09 0 0 0 .48-.693c.076-.122.161-.235.232-.363a8.332 8.332 0 0 0 .52-1.154c.009-.024.021-.044.03-.068c.004-.01.01-.02.014-.032a4.299 4.299 0 0 1 .026 2.193Z"/></svg>`,
    items: [
      {
        route: INDIVIDUAL_PAYMENT_ROUTE_NAME,
        name: 'Pagos individuales',
        roles: [ADMIN],
        icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>`,
        breadCrumbs: [INDIVIDUAL_PAYMENT_ROUTE_NAME]
      },
      {
        route: GENERAL_PAYMENT_ROUTE_NAME,
        name: 'Pagos generales',
        roles: [ADMIN],
        icon: `<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/>
  </svg>`,
        breadCrumbs: [GENERAL_PAYMENT_ROUTE_NAME]
      },
    ]
  },
]